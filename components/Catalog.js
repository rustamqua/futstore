import React from "react";
import StyledCatalog from "./StyledCatalog";
import { Button, Paper } from "@material-ui/core";
import Link from "next/link";
const setDesign = () => {
  localStorage.setItem("Design", JSON.stringify("designcard1"));
};
const setUltimate = () => {
  localStorage.setItem("Ultimate", JSON.stringify("ultimatecard"));
};
const Catalog = () => {
  return (
    <StyledCatalog>
      <div>
        <div className="section">
          <h2>КАТАЛОГ FUTSTORE</h2>
          <h3>
            У тебя будет единственная карта в своем роде. Потому что каждая наша
            карта - уникальна.
          </h3>
        </div>

        <div className="productWrapper">
          <Paper elevation="5">
            <div className="product">
              <div>
                <img src="../static/first_i.png"></img>
                <p>5990тг.</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nunc scelerisque viverra mauris in aliquam sem fringilla ut.
                </p>
                <Link href="/cardConstructor">
                  <Button variant="contained" color="secondary">
                    СОЗДАТЬ
                  </Button>
                </Link>
              </div>
            </div>
          </Paper>
          <Paper elevation="5">
            <div className="product">
              <div>
                <img src="../static/7SEV_i.png"></img>
                <p>5990тг.</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nunc scelerisque viverra mauris in aliquam sem fringilla ut.
                </p>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={setDesign}
                >
                  В корзину
                </Button>
              </div>
            </div>
          </Paper>
          <Paper elevation="5">
            <div className="product">
              <div>
                <img src="../static/7SEV_i.png"></img>
                <p>5990тг.</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nunc scelerisque viverra mauris in aliquam sem fringilla ut.
                </p>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={setUltimate}
                >
                  В корзину
                </Button>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </StyledCatalog>
  );
};
export default Catalog;
