import { expect, test } from "vitest";
import { createClient } from "./runtime/_create-client";
import { generateGraphqlOperation } from "./runtime/_generate-graphql-operation";
import { fragmentOn, Query, QueryGenqlSelection } from "./schema.example";

test("basic query runs", async () => {
  const client = createClient({
    url: "https://api.basehub.com/graphql?api-version=latest&token=bshb_pk_admpev0wkbduj15o47vsr0vm4s4ece5sy7ilhmm5eavkwd23j2dbfs8jim95rvcc",
  });

  const res = await client.query({
    _sys: {
      dashboardUrl: true,
    },
    _structure: {
      __args: {
        format: "xml",
        resolveTargetsWith: "id",
        withConstraints: true,
      },
    },
    changelog: {
      entries: {
        __args: {
          first: 5,
          orderBy: "_sys_createdAt__DESC",
        },
        items: {
          on_ChangelogTemplateComponent: {
            _title: true,
          },
        },
      },
    },
  });

  expect(res?._sys?.dashboardUrl).toEqual(
    "https://basehub.com/basehub/basehub-com/explore/main"
  );

  expect(res?.changelog?.entries?.items?.length).toEqual(5);

  const res2 = await client.query({
    changelog: {
      entries: {
        __typename: 1,
        __args: {
          filter: { _id: { eq: "noop" } },
        },
        items: {
          _title: true,
        },
      },
    },
  });

  expect(typeof res2?.changelog?.entries?.__typename).toEqual("string");
  expect(res2?.changelog?.entries?.items?.length).toEqual(0);
});

test("query generation", async () => {
  const op = generateGraphqlOperation("query", {
    _sys: {
      dashboardUrl: true,
    },
    _structure: {
      __args: {
        // @ts-ignore
        format: "xml",
        // @ts-ignore
        resolveTargetsWith: "id",
        withConstraints: true,
      },
    },
    changelog: {
      entries: {
        __args: {
          first: 5,
          // @ts-ignore
          orderBy: "_sys_createdAt__DESC",
        },
        items: {
          _id: 1,
          on_ChangelogTemplateComponent: {
            _title: true,
          },
        },
      },
    },
  });

  expect(op).toEqual({
    query:
      "query {_sys{dashboardUrl},_structure(format:xml,resolveTargetsWith:id,withConstraints:true),changelog{entries(first:5,orderBy:_sys_createdAt__DESC){items{_id,...f1}}}},fragment f1 on ChangelogTemplateComponent{f1__alias___title: _title}",
    variables: {},
  });
});

// some type checks

test("should cast correct types from schema example", async () => {
  const client = createClient<Query, QueryGenqlSelection>({
    url: "http://nope",
  });

  client
    .query({
      repository: {
        __args: { name: "name" },
        createdAt: true,
        customScalar: true,
      },
      unionThatImplementsInterface: {
        on_ClientErrorNameAlreadyTaken: {
          __typename: true,
          ownProp1: true,
        },
      },
      user: fragmentOn("User", { name: true }),
    })
    .then((r) => {
      r.repository.createdAt;
      r.repository.customScalar?.x;
      // @ts-expect-error
      r.repository.forks;

      r.user?.name;
      // @ts-expect-error
      r.user?.common;
      // @ts-expect-error
      r.user?.anotherField;
    });
});
