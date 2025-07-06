import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../keystatic.config";

export const dynamic = "force-static";

export const { POST, GET } = makeRouteHandler({
  config,
});
