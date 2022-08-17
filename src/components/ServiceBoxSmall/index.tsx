import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface ServiceBoxSmallI {
  icon: string;
  topic: string;
  path: string;
}

function ServiceBoxSmall({ icon, topic, path }: ServiceBoxSmallI) {
  return (
    <Link to={path}>
      <Card className="mx-auto bg-sky-800/40 my-2 w-96 border-2 border-light-blue py-4 rounded-3xl cursor-pointer hover:drop-shadow-[0_5px_5px_rgba(56,212,241,0.5)] ">
        <CardHeader color="blue" className="relative h-24 p-4 ">
          <Icon className="w-full h-full text-light-blue " icon={icon} />
        </CardHeader>
        <CardBody className="text-center px-4 ">
          <Typography variant="h5" className="mb-2">
            {topic}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
}

export default ServiceBoxSmall;
