import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBigSizeText extends Struct.ComponentSchema {
  collectionName: 'components_blog_big_size_texts';
  info: {
    displayName: 'bigSizeText';
    icon: 'arrowRight';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    textColor: Schema.Attribute.String;
  };
}

export interface BlogCommentBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_comment_blocks';
  info: {
    displayName: 'commentBlock';
    icon: 'apps';
  };
  attributes: {
    lineColor: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
  };
}

export interface BlogFullColoredTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_blog_full_colored_text_blocks';
  info: {
    displayName: 'fullColoredTextBlock';
    icon: 'arrowRight';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
    textColor: Schema.Attribute.String;
  };
}

export interface BlogItemWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_blog_item_with_titles';
  info: {
    description: '';
    displayName: 'itemWithTitle';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlogListWithBackground extends Struct.ComponentSchema {
  collectionName: 'components_blog_list_with_backgrounds';
  info: {
    displayName: 'listWithBackground';
    icon: 'check';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    icon: Schema.Attribute.Blocks;
    lineColor: Schema.Attribute.String;
    title: Schema.Attribute.Blocks;
  };
}

export interface BlogListWithTitle extends Struct.ComponentSchema {
  collectionName: 'components_blog_list_with_titles';
  info: {
    description: '';
    displayName: 'listWithTitle';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.Text;
    item: Schema.Attribute.Component<'blog.item-with-title', true>;
  };
}

export interface BlogRow extends Struct.ComponentSchema {
  collectionName: 'components_blog_rows';
  info: {
    displayName: 'row';
    icon: 'collapse';
  };
  attributes: {
    record: Schema.Attribute.Component<'shared.text', true>;
  };
}

export interface BlogSubtitle extends Struct.ComponentSchema {
  collectionName: 'components_blog_subtitles';
  info: {
    displayName: 'subtitle';
    icon: 'arrowRight';
  };
  attributes: {
    color: Schema.Attribute.String;
    subtitle: Schema.Attribute.Blocks;
    subtitleSlug: Schema.Attribute.String;
  };
}

export interface SharedListWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_with_icons';
  info: {
    displayName: 'listWithIcon';
    icon: 'alien';
  };
  attributes: {
    icon: Schema.Attribute.Blocks;
    text: Schema.Attribute.Blocks;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    isSEOFriendly: Schema.Attribute.Boolean;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedText extends Struct.ComponentSchema {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'text';
    icon: 'bold';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.big-size-text': BlogBigSizeText;
      'blog.comment-block': BlogCommentBlock;
      'blog.full-colored-text-block': BlogFullColoredTextBlock;
      'blog.item-with-title': BlogItemWithTitle;
      'blog.list-with-background': BlogListWithBackground;
      'blog.list-with-title': BlogListWithTitle;
      'blog.row': BlogRow;
      'blog.subtitle': BlogSubtitle;
      'shared.list-with-icon': SharedListWithIcon;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.text': SharedText;
    }
  }
}
