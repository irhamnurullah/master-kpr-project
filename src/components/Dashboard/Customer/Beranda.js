import { Button, Image } from "antd";
import berandaImage from "../../../assets/img/beranda.png";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import "./beranda.css";
import { Link } from "react-router-dom";

const Beranda = () => {
   return (
      <>
         <Header className="header_class" style={{ padding: 0, background: "#fff" }}>
            <div className="text_header">Beranda</div>
         </Header>
         {/* --- Content --- */}
         <Content className="content__data">
            <div
               className="site-layout-background "
               style={{
                  padding: 40,
                  minHeight: "100%",
                  background: "#fff",
               }}
            >
               <h3 className="title">Pengajuan KPR Terakhir</h3>
               <div className="content__beranda">
                  <Image src={berandaImage} alt="" className="image__beranda" preview={false}></Image>
               </div>
               <div className="homepage__content" style={{ display: "initial" }}>
                  <p>
                     <span>Belum ada pengajuan KPR ? </span>
                     Ajukan KPR online, wujudkan rumah idamanmu bersama Bank BRI
                  </p>
               </div>
               <div className="button__reset">
                  <Link to="/customer/pengajuan">
                     <Button size="large" className="button_2">
                        Buat Pengajuan KPR
                     </Button>
                  </Link>
               </div>
            </div>
         </Content>
      </>
   );
};

export default Beranda;
