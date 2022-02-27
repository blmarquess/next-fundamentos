import Layout from '../../components/Layout';
import  { useRouter } from 'next/router';

export default function post() {
  const router = useRouter();
  return (
      <Layout>
          <h1>Utilizando o hook useRouter</h1>
                <h3>
                    O que conseguimos fazer com o hook useRouter 
                </h3>
                    <p>
                        Conseguimos recuperar facilmente o id apos o patch this.local/
                        Dessa forma conseguimos recuperar de forma facil e dinamica o path onde
                        o component esta sendo renderizado e consguimos com isso deixar nossos codigo
                        mais limpos e consisos.
                    </p>
                    <p>
                        Atualmente estams em /blog/{router.query.post}
                    </p>
      </Layout>
    );
}