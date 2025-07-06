import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../keystatic.config";

// export const dynamic = "force-static";

export async function generateStaticParams() {
  // const { POST, GET } = makeRouteHandler({
  //   config,
  // });

  return [];
}

export const { POST, GET } = makeRouteHandler({
  config,
});
