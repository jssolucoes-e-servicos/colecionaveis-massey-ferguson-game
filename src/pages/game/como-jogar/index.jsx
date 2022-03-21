import Template from "@/layouts/GameLayout";
import {
  Container,
  ContainerPlay, PlayA,
  PlayBlocoTXT, Playdas, PlayImaageM, PlayImage, PlayTXT
} from "@/styles/pages/howplayStyle";
import { parseCookies } from "nookies";
import React from "react";
export default function Howplay({userData}) {
  return (
    <Template userData={userData}>
      <Container>
        <ContainerPlay>
          <Playdas>
            <PlayA
              style={{
                borderRight: "1.5px solid red",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <PlayBlocoTXT>
                <h1>COMO JOGAR?</h1>
                <iframe
                  style={{
                    width: "100%",
                    height: 300,
                    marginBottom: 20,
                  }}
                  src="https://www.youtube.com/embed/nsjqK6LyzF4"
                />
                <PlayTXT>
                  Ao acessar o jogo, você verá o álbum completo e as suas
                  figurinhas. Para navegar entre as páginas, clique nas setinhas
                  laterais.
                </PlayTXT>
              </PlayBlocoTXT>
              <PlayBlocoTXT>
                <h2>Como ganhar uma figurinha?</h2>
                <PlayTXT>
                  Diariamente, ao acessar o jogo, você receberá um pacote de
                  figurinha sorteada aleatoriamente para colagem.
                </PlayTXT>
              </PlayBlocoTXT>
              <PlayBlocoTXT>
                <h2>Como colar uma figurinha? </h2>
                <PlayTXT>
                  Para colar uma figurinha, clique na figurinha desejada e a
                  arraste até a página correta e local indicado através do
                  número. Se a figurinha selecionada for diferente do número e
                  página, não será permitida a colagem. Se estiverem corretos,
                  você verá um aviso de “Figurinha colada com sucesso”.
                </PlayTXT>
              </PlayBlocoTXT>
              <PlayBlocoTXT>
                <h2>Como vender uma figurinha?</h2>
                <PlayTXT>
                  Em Histórico, você pode acompanhar todas as suas figurinhas, o
                  botão da esquerda serve para colagem da figurinha e o da
                  direita para venda/troca.
                </PlayTXT>
                <PlayImaageM src="/storage/images/jogar/1.png" style={{ maxWidth: 50 }} />
              </PlayBlocoTXT>
              <PlayBlocoTXT>
                <h2>Como saber meu desempenho no jogo?</h2>
                <PlayTXT>
                  Em Ranking, você pode acompanhar a sua posição no jogo perante
                  os outros jogadores e os 3 primeiros lugares. Lá, você também
                  consegue acompanhar os seus pontos e tempo de jogo.
                </PlayTXT>
              </PlayBlocoTXT>
            </PlayA>
          </Playdas>
          {/* segundo bloco aqui */}
          <Playdas>
            <PlayA>
              <PlayBlocoTXT>
                <h2>Como comprar figurinha?</h2>
                <PlayTXT
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <PlayImage src="/storage/images/jogar/figure_01.png" style={{ padding: 0 }} />

                  <p style={{ marginLeft: 8 }}>
                    Vá até a Banca e selecione a figurinha que deseja comprar,
                    clique no ícone vermelho e depois em confirmar.
                  </p>
                </PlayTXT>
                <PlayTXT>
                  Nessa página, você pode acompanhar seus Massey Points, eles
                  indicarão o seu saldo para compra de figurinhas raras,
                  lançamentos, médias e comuns. Para buscar uma figurinha,
                  utilize o campo de busca, basta digitar o número da figurinha
                  desejada e pesquisar!
                </PlayTXT>
              </PlayBlocoTXT>

              <PlayBlocoTXT>
                <h2>Como alterar meus dados?</h2>
                <PlayTXT>
                  Na página Perfil, você pode verificar todos os seus dados, ler
                  nossos termos, além das informações referentes ao seu
                  desempenho no jogo. Clicando em “Editar perfil”, seus dados
                  poderão ser alterados.
                </PlayTXT>
                <PlayImaageM src="/storage/images/jogar/2.png" style={{ maxWidth: 80 }} />
              </PlayBlocoTXT>
              <PlayBlocoTXT>
                <h2>Como resgatar uma figurinha?</h2>
                <PlayTXT>
                  Clicando em Perfil, você poderá resgatar a sua figurinha ao
                  digitar o cupom do influencer.
                </PlayTXT>
                <PlayImaageM src="/storage/images/jogar/3.png" style={{ maxWidth: 80 }} />
              </PlayBlocoTXT>
              <PlayBlocoTXT>
                <h2>Como parar a música?</h2>
                <PlayTXT>
                  Clique na setinha verde no canto superior esquerdo.
                </PlayTXT>
                <PlayImaageM src="/storage/images/jogar/4.JPG" style={{ width: 30 }} />
              </PlayBlocoTXT>
              <PlayBlocoTXT>
                <h2>Como trocar o idioma?</h2>
                <PlayTXT>
                  Nosso jogo possui dois idiomas, português e espanhol, para
                  alterar, basta clicar nas bandeiras disponíveis no menu
                  lateral.
                </PlayTXT>
                <PlayImaageM src="/storage/images/jogar/5.gif" />
              </PlayBlocoTXT>
            </PlayA>
          </Playdas>
        </ContainerPlay>
      </Container>
    </Template>
  );
}

export const getServerSideProps = async (ctx) => {
  const { "cmf-00": profile } = parseCookies(ctx);
  if (!profile) {
    return {
      redirect: {
        destination: "/login",
        permanet: false,
      },
    };
  }

  return {
    props: { userData: profile },
  };
};
