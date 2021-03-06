// import React, { useState } from 'react';
// import RepoTable from './RepoTable';

// import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';

// const REPO_QUERY = gql`
//   query REPO_QUERY {
//     # Let's use carbon as our organization
//     organization(login: "carbon-design-system") {
//       # We'll grab all the repositories in one go. To load more resources
//       # continuously, see the advanced topics.
//       repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {
//         totalCount
//         nodes {
//           url
//           homepageUrl
//           issues(filterBy: { states: OPEN }) {
//             totalCount
//           }
//           stargazers {
//             totalCount
//           }
//           releases(first: 1) {
//             totalCount
//             nodes {
//               name
//             }
//           }
//           name
//           updatedAt
//           createdAt
//           description
//           id
//         }
//       }
//     }
//   }
// `;

// const headers = [
//   {
//     key: 'name',
//     header: 'Name',
//   },
//   {
//     key: 'createdAt',
//     header: 'Created',
//   },
//   {
//     key: 'updatedAt',
//     header: 'Updated',
//   },
//   {
//     key: 'issueCount',
//     header: 'Open Issues',
//   },
//   {
//     key: 'stars',
//     header: 'Stars',
//   },
//   {
//     key: 'links',
//     header: 'Links',
//   },
// ];

// const LinkList = ({ url, homepageUrl }) => (
//   <ul style={{ display: 'flex' }}>
//     <li>
//       <Link href={url}>GitHub</Link>
//     </li>
//     {homepageUrl && (
//       <li>
//         <span>&nbsp;|&nbsp;</span>
//         <Link href={homepageUrl}>Homepage</Link>
//       </li>
//     )}
//   </ul>
// );

// const getRowItems = rows =>
//   rows.map(row => ({
//     ...row,
//     key: row.id,
//     stars: row.stargazers.totalCount,
//     issueCount: row.issues.totalCount,
//     createdAt: new Date(row.createdAt).toLocaleDateString(),
//     updatedAt: new Date(row.updatedAt).toLocaleDateString(),
//     links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,
//   }));

const RepoPage = () => {
  // const [totalItems, setTotalItems] = useState(0);
  // const [firstRowIndex, setFirstRowIndex] = useState(0);
  // const [currentPageSize, setCurrentPageSize] = useState(10);

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">

        </div>
      </div>
    </div>
  );
};

export default RepoPage;
