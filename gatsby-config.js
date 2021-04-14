/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    versions: [
      {
        title: 'v2.0',
        path: '/2.0/'
      },
      {
        title: 'v1.4',
        path: '/1.4/'
      }
    ],
    pages: [
      {
        title: 'Adobe Analytics API',
        path: '/2.0/'
      },
      {
        title: 'Getting started',
        path: '/2.0/getting-started/'
      },
      {
        title: 'Endpoint guides',
        path: '/2.0/endpoints/'
      },
      {
        title: 'API reference',
        path: '/2.0/api/'
      },
      {
        title: 'Use cases',
        path: '/2.0/use-cases/'
      },
      {
        title: 'Support',
        path: '/2.0/support/'
      }
    ],
    subPages: [
      {
        title: 'Getting started',
        path: '/2.0/getting-started/',
        pages: [
          {
            title: 'JWT',
            path: '/2.0/getting-started/jwt/'
          },
          {
            title: 'Migrating from 1.4',
            path: '/2.0/getting-started/migration/'
          },
          {
            title: 'FAQ',
            path: '/2.0/getting-started/faq/'
          }
        ]
      },
      {
        title: 'Endpoint guides',
        path: '/2.0/endpoints/',
        pages: [
          {
            title: 'Bulk data insertion',
            path: '/2.0/endpoints/bulk-data-insertion/',
            pages: [
              {
                title: 'API reference',
                path: '/2.0/endpoints/bulk-data-insertion/api-reference/'
              },
              {
                title: 'Column reference',
                path: '/2.0/endpoints/bulk-data-insertion/column-reference/'
              },
              {
                title: 'Validate',
                path: '/2.0/endpoints/bulk-data-insertion/validate/'
              },
              {
                title: 'Visitor groups',
                path: '/2.0/endpoints/bulk-data-insertion/visitor-groups/'
              },
              {
                title: 'Customer ID',
                path: '/2.0/endpoints/bulk-data-insertion/customer-id/'
              },
              {
                title: 'Examples',
                path: '/2.0/endpoints/bulk-data-insertion/example/'
              },
              {
                title: 'Troubleshooting',
                path: '/2.0/endpoints/bulk-data-insertion/troubleshooting/'
              },
              {
                title: 'FAQ',
                path: '/2.0/endpoints/bulk-data-insertion/faq/'
              }
            ]
          },
          {
            title: 'Calculated metrics',
            path: '/2.0/endpoints/calculatedmetrics/',
            pages: [
              {
                title: 'Functions',
                path: '/2.0/endpoints/calculatedmetrics/functions'
              },
              {
                title: 'Validate',
                path: '/2.0/endpoints/calculatedmetrics/validate'
              },
              {
                title: 'FAQ',
                path: '/2.0/endpoints/calculatedmetrics/faq'
              }
            ]
          },
          {
            title: 'Data repair',
            path: '/2.0/endpoints/data-repair/',
            pages: [
              {
                title: 'API reference',
                path: '/2.0/endpoints/data-repair/api-reference/'
              },
              {
                title: 'Variables',
                path: '/2.0/endpoints/data-repair/variables/'
              },
              {
                title: 'Server call estimate',
                path: '/2.0/endpoints/data-repair/server-call-estimate/'
              },
              {
                title: 'Job',
                path: '/2.0/endpoints/data-repair/job/'
              },
              {
                title: 'Job ID',
                path: '/2.0/endpoints/data-repair/job-id/'
              },
              {
                title: 'FAQ',
                path: '/2.0/endpoints/data-repair/faq/'
              }
            ]
          },
          {
            title: 'Discovery',
            path: '/2.0/endpoints/discovery/'
          },
          {
            title: 'Reports',
            path: '/2.0/endpoints/reports/',
            pages: [
              {
                title: 'Breakdowns',
                path: '/2.0/endpoints/reports/breakdowns/'
              },
              {
                title: 'Debugger',
                path: '/2.0/endpoints/reports/debugger/'
              },
              {
                title: 'Examples',
                path: '/2.0/endpoints/reports/examples/'
              },
              {
                title: 'Search filters',
                path: '/2.0/endpoints/reports/search-filters/'
              },
              {
                title: 'Segments',
                path: '/2.0/endpoints/reports/segments/'
              }
            ]
          },
          {
            title: 'Report suites',
            path: '/2.0/endpoints/report-suites/'
          },
          {
            title: 'Segments',
            path: '/2.0/endpoints/segments/',
            pages: [
              {
                title: 'Definitions',
                path: '/2.0/endpoints/segments/definition/'
              },
              {
                title: 'Validate',
                path: '/2.0/endpoints/segments/validate/'
              },
              {
                title: 'Examples',
                path: '/2.0/endpoints/segments/examples/'
              },
              {
                title: 'FAQ',
                path: '/2.0/endpoints/segments/faq'
              }
            ]
          },
          {
            title: 'Tags',
            path: '/2.0/endpoints/tags/'
          },
          {
            title: 'Usage',
            path: '/2.0/endpoints/usage/'
          },
          {
            title: 'Virtual report suites',
            path: '/2.0/endpoints/vrs/',
            pages: [
              {
                title: 'JSON body reference',
                path: '/2.0/endpoints/vrs/reference/'
              },
              {
                title: 'Examples',
                path: '/2.0/endpoints/vrs/examples/'
              }
            ]
          }
        ]
      },
      {
        title: 'Use cases',
        path: '/2.0/use-cases/',
        pages: [
          {
            title: 'cURL',
            path: '/2.0/use-cases/curl/'
          },
          {
            title: 'Java',
            path: '/2.0/use-cases/java/'
          },
          {
            title: 'Postman',
            path: '/2.0/use-cases/postman/'
          },
          {
            title: 'Python',
            path: '/2.0/use-cases/python/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/analytics-apis/docs/'
};
