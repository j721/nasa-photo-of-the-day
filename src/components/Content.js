import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const NasaContent = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="ContentFiller">
      <p>{props.date}</p>
      <div className="ToggleButton">
        <Button onClick={toggle} style={{ marginBottom: "1rem" }}>
          Description
        </Button>
        <Collapse isOpen={isOpen}>
          <Card className="ToggleBody">
            <CardBody>
              <p className="paragraphs">{props.explanation}</p>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </div>
  );
};

export default NasaContent;
