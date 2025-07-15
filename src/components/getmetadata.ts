import metadataJson from "../data/metadata.json";
const metadata: MetadataItem[] = metadataJson;

// クエリパラメータを取得
const currentUrl = new URL(window.location.href);
const paramId = currentUrl.searchParams.get("id");
const paramVersionText = currentUrl.searchParams.get("v");
const versionArr = paramVersionText?.split(".");
const version = [Number(versionArr?.[0]), Number(versionArr?.[1])];

type MetadataItem = {
    id: string;
    name: string;
    gistId: string;
    latestVersion: number[];
}

function getMetadata(): MetadataItem[] | false {
    if (paramId && paramVersionText) {
        return metadata;
    } else {
        return false;
    }
}

export default getMetadata;