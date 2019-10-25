export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db36bb32b17bbbe9c3d7efb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-demo-studio',
                  apiId: 'dc3c5eb4-9a02-48b3-af24-418ddca1283f'
                },
                {
                  buildHookId: '5db36bb34bfd359c82f40d38',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-demo',
                  apiId: '5b16f1d3-0550-4a1b-93bd-a037cb3f151b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stelly-dev-energysmart-01/sanity-gatsby-blog-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-demo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
