import React,{useState} from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const NasaHeader = props => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);
    return (
      <div className="HeaderContent">
         <h1>Nasa Photo of the Day</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">Previous Photos</a>
          <a href="#">
            <Button size="sm" id="Popover1" type="button">
              Send Photos
            </Button>
            <Popover
              placement="bottom"
              isOpen={popoverOpen}
              target="Popover1"
              toggle={toggle}
            >
              <PopoverHeader>Send us your own Photos!</PopoverHeader>
              <PopoverBody>
                If you would like to send us your own photos of outerspace. Our
                email is nasa@email.com
              </PopoverBody>
            </Popover>
          </a>
        </nav>
      <div className="TitleHolder">
        <h1>{props.title}</h1>
      </div>
      </div>
    );
  };
  
  export default NasaHeader;
  