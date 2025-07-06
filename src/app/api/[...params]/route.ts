import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../keystatic.config";

export const dynamic = "force-static";
export const dynamicParams = true;

export async function generateStaticParams() {
  // console.log("params :", await params);
  return [{}];
}

export const { POST, GET } = makeRouteHandler({
  config,
});
