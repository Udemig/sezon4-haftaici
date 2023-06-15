import { useParams } from "react-router-dom";
import useJsonplaceholderApi, {
  JHolderAlbum,
  JHolderPost,
  JHolderUser,
} from "../../hooks/useJsonplaceholderApi";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AlbumBox from "./components/album-box";
import PostBox from "./components/post-box";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType } from "../../redux/store";
import { setUserAlbum } from "../../redux/jholderAlbumSlice";

export type UserIdParamType = {
  userId: string | undefined;
};

// redux ile context api'nin farkı
// context api virtualdom kullanır, redux ise virtualdom kullanmaz onun yerin
// kendi mekanizmasını geliştirmiştir. ve bu performans artışını sağlar.

export default function JHolderUserDetailPage() {
  const params = useParams<UserIdParamType>();
  const api = useJsonplaceholderApi();

  const jholderUserState = useSelector(
    (state: ReduxStateType) => state.jholderUserState
  );
  const jholderAlbumState = useSelector(
    (state: ReduxStateType) => state.jholderAlbumState
  );
  const dispatch = useDispatch();

  const [user, setUser] = useState<JHolderUser | null>(null);
  const [posts, setPosts] = useState<JHolderPost[] | null>(null);
  const [albums, setAlbums] = useState<JHolderAlbum[] | null>(null);

  const [initialized, setInitialized] = useState<boolean>(false);

  // TODO params.userId ifadesinin mevcut olup olmadığını kontrol et.

  useEffect(() => {
    (async () => {
      // params.userId değeri dolu mu?
      if (params.userId) {
        console.log("Requestler başlatılıyor.");

        //let userResult = await api.getUser(parseInt(params.userId));
        //console.log(">> User result: ", userResult);
        //let postsResult = await api.posts(parseInt(params.userId));
        //console.log(">> Posts result: ", postsResult);
        //let albumsResult = await api.albums(parseInt(params.userId));
        //console.log(">> Albums result: ", albumsResult);

        const promises: any[] = [];

        promises.push(
          jholderUserState.users
            ? jholderUserState.users.find(
                (user) => user.id === parseInt(params.userId as string)
              )
            : api.getUser(parseInt(params.userId))
        );

        promises.push(api.posts(parseInt(params.userId)));

        // Redux'ta albüm datası var mı bunu kontrol ediyoruz.
        const foundAlbum = jholderAlbumState.albums[parseInt(params.userId)];
        console.log(">> FOUND ALBUM", foundAlbum);

        // Eğer redux'ta bu albüm bilgisi varsa bu bilgiyi promises dizisine
        // doğrudan ekle, aksi halde api'ye istek at.
        if (foundAlbum) {
          promises.push(foundAlbum);
        } else {
          promises.push(api.albums(parseInt(params.userId)));
        }

        // Tüm promise itemlerini resolve et.
        const result: any[] = await Promise.all(promises);
        console.log(">> Promise Result", result);

        setUser(result[0] as JHolderUser);
        setPosts(result[1] as JHolderPost[]);
        setAlbums(result[2] as JHolderAlbum[]);

        // Eğer foundAlbum undefined ise bu if'in içerisine girer
        if (!foundAlbum) {
          dispatch(
            setUserAlbum({
              userId: parseInt(params.userId),
              albums: result[2] as JHolderAlbum[],
            })
          );
        }

        // bu ifadenin en aşağıda olması gerekir, aksi halde diğer state'ler
        // set edilmeden initialize true yaparsak null değerler üzerinden
        // işlem yapmaya çalışılır ve bu da hataya sebep olur.
        setInitialized(true);
      } else {
        alert("User Id not found.");
      }
    })();
  }, []);

  if (initialized === false) {
    return (
      <>
        <br />
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <h1>{user?.name}</h1>
      <Row>
        <Col sm="3">
          <strong>Email:</strong>
          &nbsp;
          {user?.email}
        </Col>

        <Col sm="3">
          <strong>Phone:</strong>
          &nbsp;
          {user?.phone}
        </Col>
        <Col sm="3">
          <strong>Website:</strong>
          &nbsp;
          {user?.website}
        </Col>
        <Col sm="3">
          <strong>Username:</strong>
          &nbsp;
          {user?.username}
        </Col>
      </Row>

      <hr />

      <h1>Albums</h1>

      <Row>
        {albums?.map((item, index) => {
          return (
            <Col sm="3" key={item.id}>
              <AlbumBox
                title={"Album id: " + item.id}
                href={`/jholder/user/${user?.id}/album/${item.id}`}
                body={item.title}
              />
            </Col>
          );
        })}
      </Row>

      <hr />

      <h1>Posts</h1>

      <Row>
        {posts?.map((item, index) => {
          return (
            <Col sm="3" key={item.id}>
              <PostBox
                box_title={user?.name as string}
                post_title={item.title}
                href={`/jholder/user/${user?.id}/post/${item.id}`}
                body={item.body}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}
