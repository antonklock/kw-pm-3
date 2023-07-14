import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID || "default value";

export async function GetProjects() {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  const projects = response.results.map((page) => {
    let id = page.id;
    let name = "untitled";
    let localPath = "unknown";
    let status = "unknown";
    let statusColor = "unknown";
    let notionLink = "unknown";

    if ("properties" in page) {
      console.log(page.properties);
      if ("title" in page.properties.Name) {
        name = page.properties.Name.title[0].plain_text;
      }
      if ("Status" in page.properties) {
        if ("status" in page.properties.Status) {
          if (page.properties.Status.status != null) {
            status = page.properties.Status.status.name;
            if ("color" in page.properties.Status.status) {
              statusColor = page.properties.Status.status.color;
            }
          }
        }
      }
    }
    return {
      id,
      name,
      localPath,
      status,
      statusColor,
      notionLink,
    };
  });

  //   console.log(response);

  return projects;
}
