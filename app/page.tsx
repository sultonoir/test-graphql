import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

async function loadData() {
  const { data } = await getClient().query({
    query: gql`
      query GetCountry {
        country(code: "BR") {
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
      }
    `,
  });
  return data;
}

export default async function Home() {
  const data = await loadData();
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold capitalize">{data.country.name}</p>
      </div>
    </div>
  );
}
