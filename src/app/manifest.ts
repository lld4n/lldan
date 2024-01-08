import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "lldan",
    short_name: "lldan",
    description: "Frontend developer in Kazan",
    start_url: "/",
    display: "standalone",
  };
}
