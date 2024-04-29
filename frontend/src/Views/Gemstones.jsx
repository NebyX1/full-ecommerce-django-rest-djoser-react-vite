import React from "react";
import { Container, Spinner, Alert, Row } from "react-bootstrap";
import GemAndPlantProperties from "../components/properties/GemAndPlantProperties";
import { useFetchGemsAndPlants } from "../../hooks/helpers/useFetchGemsAndPlants";
import Snippet from "../components/shared/Snippet";

const GemComponent = () => {
  const {
    data: gemsandplants,
    isLoading,
    isError,
    error,
  } = useFetchGemsAndPlants();

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </Container>
    );
  }
  if (isError) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="danger">Error al cargar... {error.message}</Alert>
      </Container>
    );
  }
  
  const gems = gemsandplants.filter(gemsandplant => gemsandplant.type === "gem");
  
  return (

    <>
    <Snippet pageName="Gemas" />

    <Container className="mt-5">
      {gems.map((gem) => (
        <Row id={gem.id} key={gem.id} className="justify-content-center">
          <GemAndPlantProperties gemsandplant={gem} />
        </Row>
      ))}
    </Container>
    </>
  );
};

export default GemComponent;
