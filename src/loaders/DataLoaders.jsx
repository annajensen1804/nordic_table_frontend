import { serverPath } from "../settings";

// Lille hjælper, så vi ikke gentager fetch + fejltjek + udpakning overalt.
const getData = async (path, errorText = "Fejl ved hentning") => {
  const res = await fetch(`${serverPath}${path}`);
  if (!res.ok) throw new Response(errorText, { status: res.status });
  const json = await res.json();
  return json.data;
};

// Henter alle dishes og viser kun 'isSignature: true' på forsiden
export const menuLoader = async () => {
    return getData("/dishes");
}