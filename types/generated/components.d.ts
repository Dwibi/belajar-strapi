import type { Schema, Attribute } from '@strapi/strapi';

export interface LandingPageRoleSection extends Schema.Component {
  collectionName: 'components_landing_page_role_sections';
  info: {
    displayName: 'Role Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    roleCards: Attribute.Component<'cards.role-card', true> &
      Attribute.Required;
  };
}

export interface LandingPageHeroSection extends Schema.Component {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    downloadBtn: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface ComponentsPhill extends Schema.Component {
  collectionName: 'components_components_phills';
  info: {
    displayName: 'Phill';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface CardsRoleCard extends Schema.Component {
  collectionName: 'components_components_role_cards';
  info: {
    displayName: 'Role Card';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    role_lists: Attribute.Relation<
      'cards.role-card',
      'oneToMany',
      'api::role-list.role-list'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing-page.role-section': LandingPageRoleSection;
      'landing-page.hero-section': LandingPageHeroSection;
      'components.phill': ComponentsPhill;
      'cards.role-card': CardsRoleCard;
    }
  }
}
