export default ({ env }) => ({
  
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  preview: {
    enabled: true,
    config: {
      allowedOrigins: ['https://mip.institute', 'http://localhost:3000','https://mip-institute-git-previewmode-ipe.vercel.app'], 
      async handler(uid, { documentId, locale, status }) {
        const clientUrl = env("CLIENT_URL")
        const previewSecret = env("PREVIEW_SECRET")
        const document = await strapi.documents(uid).findOne({ documentId });

        console.log(document, uid);
        
        const pathname = getPreviewPathname(uid, { locale, document });

        if (!pathname) {
          return null;
        }
        

        // Use Next.js draft mode passing it a secret key and the content-type status
        const urlSearchParams = new URLSearchParams({
          url:pathname,
          status,
          secret: previewSecret,
          slug: document.slug
        });

        console.log(urlSearchParams, clientUrl);
        
        // добавить секрет и убрать локалхост на енв переменные в зависимости от сред
        return `${clientUrl}/api/preview?${urlSearchParams}`;
      },
    }
  }
});

const getPreviewPathname = (uid, { locale, document }): string => {
  const { type,slug } = document;

  // Handle different content types with their specific URL patterns
  switch (uid) {
    // Handle product pages
    case "api::partner.partner": {
    
      return `/partners/${type}`;
    }
    // Handle blog articles
    case "api::blog.blog": {
      
      return `/journal/${slug}`;
    }
    default: {
      return null;
    }
  }
};