import React from "react";
import {
  DfiguregC, DobtDC,
  DobtImageC, DobtnC, FigureTC, ImgcardC, TxcardC, TxtcardsC, Txtcard_fillC
} from "./style";

export default function StandsCard({ img, children }) {
  return (
    <React.Fragment>
      <FigureTC>
        {children}
        <DfiguregC>
          <ImgcardC src={img} />
          <DobtnC>
            <DobtDC>
              <DobtImageC />
            </DobtDC>
          </DobtnC>
          <TxtcardsC>
            <TxcardC></TxcardC>
            <Txtcard_fillC></Txtcard_fillC>
          </TxtcardsC>
        </DfiguregC>
      </FigureTC>
    </React.Fragment>
  );
}
