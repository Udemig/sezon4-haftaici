import { useParams } from "react-router-dom";

export type PostDetailsParamsType = {
  userId: string | undefined;
  postId: string | undefined;
};

/**
 * ÖDEV: Post detay ekranı yapılacak. Maddeler:
 *    - Post bilgisi alınacak
 *    - Comment listesi şu adresten alınacak:
 *         https://jsonplaceholder.typicode.com/comments?postId=1
 *    - Tüm bilgileri aldıktan sonra post body ifadesini yazdırıp onun altında
 *      commentleri gösterin.
 *
 */

export default function JHolderPostDetailPage() {
  const params = useParams<PostDetailsParamsType>();

  return (
    <>
      <h1>JHolderPostDetailPage</h1>
      <hr />
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </>
  );
}
