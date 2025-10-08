import type { Schema, Struct } from '@strapi/strapi';

export interface AboutPageContent extends Struct.ComponentSchema {
  collectionName: 'components_about_page_contents';
  info: {
    displayName: 'content';
    icon: 'crown';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    template: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutPageSocialRating extends Struct.ComponentSchema {
  collectionName: 'components_about_page_social_ratings';
  info: {
    displayName: 'SocialRating';
    icon: 'star';
  };
  attributes: {
    stars: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DishSize extends Struct.ComponentSchema {
  collectionName: 'components_dish_sizes';
  info: {
    displayName: 'size';
  };
  attributes: {
    price: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePageBookHome extends Struct.ComponentSchema {
  collectionName: 'components_home_page_book_homes';
  info: {
    displayName: 'BookHome';
    icon: 'book';
  };
  attributes: {
    bookLink: Schema.Attribute.String;
    leftImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leftText: Schema.Attribute.String;
    midText: Schema.Attribute.String;
    rightImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rightText: Schema.Attribute.String;
  };
}

export interface HomePageHeroHome extends Struct.ComponentSchema {
  collectionName: 'components_home_page_hero_homes';
  info: {
    displayName: 'HeroHome';
    icon: 'dashboard';
  };
  attributes: {
    mainImg: Schema.Attribute.Media<'images' | 'files', true>;
    mainTitle: Schema.Attribute.String;
    mainVideo: Schema.Attribute.Media<'files' | 'videos'>;
    rightFourthImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    rightFourthLink: Schema.Attribute.String;
    rightFourthText: Schema.Attribute.String;
    rightSecondImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    rightSecondLink: Schema.Attribute.String;
    rightSecondText: Schema.Attribute.String;
    rightThirdImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    rightThirdLink: Schema.Attribute.String;
    rightThirdText: Schema.Attribute.String;
  };
}

export interface HomePageIgBlk extends Struct.ComponentSchema {
  collectionName: 'components_home_page_ig_blks';
  info: {
    displayName: 'igBlk';
    icon: 'grid';
  };
  attributes: {
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageMenuHome extends Struct.ComponentSchema {
  collectionName: 'components_home_page_menu_homes';
  info: {
    displayName: 'MenuHome';
    icon: 'bulletList';
  };
  attributes: {
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageMenuItemHome extends Struct.ComponentSchema {
  collectionName: 'components_home_page_menu_item_homes';
  info: {
    displayName: 'MenuItemHome';
    icon: 'database';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageReviewHome extends Struct.ComponentSchema {
  collectionName: 'components_home_page_review_homes';
  info: {
    displayName: 'ReviewHome';
    icon: 'message';
  };
  attributes: {
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageVideoBarHome extends Struct.ComponentSchema {
  collectionName: 'components_home_page_video_bar_homes';
  info: {
    displayName: 'VideoBarHome';
    icon: 'chartPie';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedComboSet extends Struct.ComponentSchema {
  collectionName: 'components_shared_combo_sets';
  info: {
    displayName: 'comboSet';
    icon: 'cloud';
  };
  attributes: {
    items: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactBlk extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_blks';
  info: {
    displayName: 'ContactBlk';
    icon: 'earth';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mapImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    mapLink: Schema.Attribute.Text;
    openTime: Schema.Attribute.Text;
    phone: Schema.Attribute.String;
  };
}

export interface SharedCustomFoodType extends Struct.ComponentSchema {
  collectionName: 'components_shared_custom_food_types';
  info: {
    displayName: 'customFoodType';
    icon: 'layout';
  };
  attributes: {
    combo: Schema.Attribute.Component<'shared.combo-set', true>;
    desc: Schema.Attribute.Blocks;
    secondDesc: Schema.Attribute.Blocks;
    subDesc: Schema.Attribute.RichText;
  };
}

export interface SharedDishNoteItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_dish_note_items';
  info: {
    displayName: 'DishNoteItem';
    icon: 'bulletList';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-page.content': AboutPageContent;
      'about-page.social-rating': AboutPageSocialRating;
      'dish.size': DishSize;
      'home-page.book-home': HomePageBookHome;
      'home-page.hero-home': HomePageHeroHome;
      'home-page.ig-blk': HomePageIgBlk;
      'home-page.menu-home': HomePageMenuHome;
      'home-page.menu-item-home': HomePageMenuItemHome;
      'home-page.review-home': HomePageReviewHome;
      'home-page.video-bar-home': HomePageVideoBarHome;
      'shared.combo-set': SharedComboSet;
      'shared.contact-blk': SharedContactBlk;
      'shared.custom-food-type': SharedCustomFoodType;
      'shared.dish-note-item': SharedDishNoteItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
