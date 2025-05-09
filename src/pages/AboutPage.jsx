import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProfilePhoto from "../assets/images/profilePhoto.jpg";

function AboutPage() {
  return (
    <Container className="mt-5 text-black">
      <Row className="align-items-center">
        {/* Image on top for mobile (xs), side-by-side on desktop (md) */}
        <Col xs={12} md={4} className="mb-3 mb-md-0 text-center">
          <img
            src={ProfilePhoto}
            alt="Profile"
            style={{ width: "100%", maxWidth: "300px" }}
            className="img-fluid"
          />
        </Col>
        <Col xs={12} md={8}>
          <Card className="bg-light text-dark p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facere,
            saepe earum nulla aspernatur excepturi maxime maiores voluptatibus
            animi nam sunt harum doloribus assumenda molestias quas ratione?
            Animi, optio laboriosam? In, debitis explicabo! Quis eos tempora
            debitis ad tempore soluta perspiciatis consequatur saepe explicabo
            odit similique delectus aliquam qui veniam iure vel illum, animi
            quae fugit. Quaerat necessitatibus ad adipisci. Blanditiis eos
            reiciendis impedit necessitatibus voluptas, ad aperiam unde
            voluptatem quidem magni molestias officiis labore cum vitae
            aspernatur dignissimos. Perferendis, quis cupiditate cum in omnis
            delectus quae ullam perspiciatis molestias. Praesentium esse,
            laboriosam minima amet odit ratione accusamus quasi id dolores
            reprehenderit. Explicabo autem provident, maiores voluptates
            laudantium iure libero! Aliquam inventore distinctio explicabo,
            placeat voluptas fuga sit unde? Expedita? Ipsa quibusdam, assumenda
            sit rerum tempore eligendi nostrum cupiditate nemo! Qui natus animi
            asperiores nisi deserunt magnam eum nobis error adipisci temporibus
            assumenda libero, provident a hic dolores quam dolorem. Dolorem
            voluptas aliquam earum repellat accusantium enim placeat ipsam, in,
            omnis doloribus ipsum animi vel harum aliquid nihil vero veritatis
            blanditiis vitae! Dolore deserunt excepturi perspiciatis cupiditate
            deleniti, dicta voluptatem! Nulla maxime maiores ab numquam eveniet
            quaerat magni asperiores dolorum explicabo. Minima consequuntur
            necessitatibus iusto aliquam vero quidem dolorem dicta quod ratione
            pariatur, vitae nostrum eveniet? Nesciunt tempora deserunt suscipit.
            Temporibus iure alias laudantium fugiat ducimus eius quia excepturi
            est ratione praesentium, quas nihil optio dolore dolorum commodi
            eaque! Non rerum itaque rem labore nobis ea voluptas culpa error
            repellendus. Architecto itaque numquam cumque possimus iusto optio
            vitae aliquam quaerat quidem! Numquam possimus reprehenderit dolores
            suscipit ipsum cum, odio tempore quis quo neque debitis magnam eius
            voluptate commodi labore. Voluptatibus. Dignissimos quidem,
            accusamus repellat veniam ab quam nemo ut, quibusdam amet voluptatem
            dolore perspiciatis inventore commodi voluptatum animi quaerat
            aliquam odio eaque! Corporis ea animi recusandae? Quae similique
            sapiente dolore?
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
