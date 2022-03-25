import ErrorBoundary from "@/components/ErrorBoundary";
import {
  ListPagination, Pagination, PaginationBox
} from "@/components/Paginations/style";
import GameContext from "@/contexts/gameContext";
import Template from "@/layouts/GameLayout";
import API from "@/services/api";
import { getAPIClient } from "@/services/axios";
import {
  ContainerRank,
  RankA, Rankform,
  RankingFormB, RankingFormIcons, RankingFormTxt,
  RankingFormTxtHrs,
  RankingImagePlayer, RankingTxtPonto, RanktPlayeA,
  RanktxtPlayerB
} from "@/styles/pages/rankingStyle";
import { parseCookies } from "nookies";
import React, { useContext, useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Ranking({userData}) {
  const { setLoad } = useContext(GameContext);
  const [players, setPlayers] = useState(null);
  const [tops, setTops] = useState(null);
  const [nextPage, setNextPage] = useState(1);
  // quantidade de icone botão paginação
  const MAX_ITEMS = 3;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;

  const [info, setInfo] = useState({
    pages: 1,
    actual: 1,
    size: 0,
  });
  const first = Math.max(info.actual - MAX_LEFT, 1);
  useEffect(() => {
    
    getPlayers();
  }, [nextPage]);
  
  async function getPlayers() {
    try {
      setLoad(true);
      const { data } = await API.get(`rank?page=${nextPage}`);
      setPlayers(data.rank.players);
      setTops(data.top);
      setInfo({
        pages: data.rank.pages,
        actual: data.rank.actual,
        size: data.rank.size,
      });
      setLoad(false);
    } catch (error) {
      setLoad(false);
    }
    }


  return (
    <Template userData={userData}>
      <ContainerRank>
        <RankA>
          <RanktPlayeA>
            <RanktxtPlayerB>RANKING</RanktxtPlayerB>
          </RanktPlayeA>
          {players === null || tops === null ? (
            <React.Fragment></React.Fragment>
          ) : (
            <ErrorBoundary>
              <Rankform>
                {players.map(function (item) {
                  return (
                    <RankingFormB key={item.id}>
                      {item.id === tops[0].id ? (
                        <>
                          <RankingImagePlayer src="/storage/images/rank/1.png" />
                          <RankingTxtPonto> 1º </RankingTxtPonto>
                          <RankingFormTxt style={{ color: "#333" }}>
                            {item.name.length >= 18
                              ? `${item.name.substr(0, 18)}...`
                              : item.name}
                          </RankingFormTxt>
                        </>
                      ) : item.id === tops[1].id ? (
                        <>
                          <RankingImagePlayer src="/storage/images/rank/2.png" />
                          <RankingTxtPonto> 2º </RankingTxtPonto>
                          <RankingFormTxt style={{ color: "#333" }}>
                            {item.name.length >= 18
                              ? `${item.name.substr(0, 18)}...`
                              : item.name}
                          </RankingFormTxt>
                        </>
                      ) : item.id === tops[2].id ? (
                        <>
                          <RankingImagePlayer src="/storage/images/rank/3.png" />
                          <RankingTxtPonto> 3º </RankingTxtPonto>
                          <RankingFormTxt style={{ color: "#333" }}>
                            {item.name.length >= 18
                              ? `${item.name.substr(0, 18)}...`
                              : item.name}
                          </RankingFormTxt>
                        </>
                      ) : (
                        <>
                          <RankingImagePlayer src="/storage/images/rank/basics.png" />
                          <RankingTxtPonto> </RankingTxtPonto>
                          <RankingFormTxt>
                            {item.name.length >= 18
                              ? `${item.name.substr(0, 18)}...`
                              : item.name}
                          </RankingFormTxt>
                        </>
                      )}
                      <RankingFormTxtHrs> {item.gaming} min</RankingFormTxtHrs>
                      <RankingFormIcons>{item.score} pt</RankingFormIcons>
                    </RankingFormB>
                  );
                })}
                <Pagination>
                  <PaginationBox
                    style={{
                      background: "#3d3d3d",
                      borderRadius: 10,
                      height: 50,
                    }}
                  >
                    <button
                      className="PaginationBtn"
                      onClick={() => setNextPage(info.actual - 1)}
                      disabled={info.actual === 1}
                    >
                      <BsChevronLeft style={{ color: "#fff" }} />
                    </button>
                    {Array.from({ length: Math.min(MAX_ITEMS, info.pages) })
                      .map((_, index) => index + first)
                      .map((page) => (
                        <ListPagination key={page}>
                          <button
                            onClick={() => setNextPage(info.pages)}
                            className={
                              page === nextPage
                                ? "pagination__item--active"
                                : null
                            }
                          >
                            {page}
                          </button>
                        </ListPagination>
                      ))}

                    <button
                      className="PaginationBtn"
                      onClick={() => setNextPage(info.actual + 1)}
                      disabled={info.actual === info.pages}
                    >
                      <BsChevronRight style={{ color: "#fff" }} />
                    </button>
                  </PaginationBox>
                </Pagination>
              </Rankform>
            </ErrorBoundary>
          )}
        </RankA>
      </ContainerRank>
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
  } else {
   try {
      const apiClient = getAPIClient(ctx);
      const { data } = await apiClient.get('players/me');
      return {
        props: { userData: data },
      };
    } catch (error) {
      return {
        redirect: {
          destination: "/login",
          permanet: false,
        },
      }
      
    }
  }
};