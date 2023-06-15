import axios, { Axios, AxiosResponse } from "axios";

export interface JHolderUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: JHolderAddress;
  phone: string;
  website: string;
  company: JHolderCompany;
}

export interface JHolderAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: JHolderGeo;
}

export interface JHolderGeo {
  lat: string;
  lng: string;
}

export interface JHolderCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface JHolderPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface JHolderAlbum {
  userId: number;
  id: number;
  title: string;
}

export interface JHolderPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// Bir obje type'ı tanımlamak için üç yöntem kullanmak mümkündür. Bunlar,
// interface, type, class'tır.

export type CommentType = {
  postId: number;
  id: number;
  name: string;
};

export class JsonplaceholderApi {
  private axiosClient: Axios;

  /**
   * Class property'lerini initialize ediyoruz.
   *
   * @param baseUrl
   */
  constructor(private readonly baseUrl: string) {
    // Yeni bir axios objesi oluştur.
    this.axiosClient = axios.create();

    // axios instance'ı içerisindeki baseURL configini set ediyoruz.
    this.axiosClient.defaults.baseURL = baseUrl;
  }

  async users(): Promise<JHolderUser[]> {
    // TODO Fill here.

    //const api = useApi()
    //api.get("https://falan.com/user/list").then((response) => {
    //setUsers(response)
    //}).catch()

    // get() fonksiyonundan dönen Promise'i await ile resolve ediyoruz ve resolve edilen
    // datayı `result` değişkenine aktarıyoruz.
    let result: AxiosResponse<JHolderUser[]> = await this.axiosClient.get<
      JHolderUser[]
    >("users");

    return result.data;
  }

  async getUser(userId: number): Promise<JHolderUser> {
    let result: AxiosResponse<JHolderUser> =
      await this.axiosClient.get<JHolderUser>("users/" + userId);

    return result.data;
  }

  async posts(userId?: number): Promise<JHolderPost> {
    const result = await this.axiosClient.get<JHolderPost>("posts", {
      params: {
        userId,
      },
    });
    return result.data;
  }

  async albums(userId?: number): Promise<JHolderAlbum> {
    // Request atılan url: albums?userId=1
    // Soru işaretinden sonraki kısım query string olarak ifade edilir.
    // Bu query stringi biz kendimiz oluşturmayız. Axios bu datayı
    // bizim gönderdiğimiz config objesi içerisindeki
    // `params` propertysini kullanarak oluşturur.
    const result = await this.axiosClient.get<JHolderAlbum>("albums", {
      params: {
        userId,
      },
    });
    return result.data;
  }

  async photos(albumId?: number): Promise<JHolderPhoto[]> {
    const result = await this.axiosClient.get<JHolderPhoto[]>("photos", {
      params: {
        albumId,
      },
    });

    return result.data;
  }

  async comments(postId?: number) {}
}

// sdk geliştirmek
// software development kit

export default function useJsonplaceholderApi() {
  // base url bilgisini dinamik olarak .env dosyasından alıyoruz.
  return new JsonplaceholderApi(import.meta.env.VITE_JSONPLACEHOLDER_BASE_URL);
}
