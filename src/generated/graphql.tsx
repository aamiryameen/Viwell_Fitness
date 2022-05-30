import { api } from '../apis';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type AddResponse = {
  answers: Array<Scalars['String']>;
  survey: Scalars['String'];
  userId: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  icon: Scalars['String'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryCreate = {
  description?: InputMaybe<Scalars['String']>;
  icon: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type CategoryUpdate = {
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Entity = {
  __typename?: 'Entity';
  data?: Maybe<Scalars['JSONObject']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: ReviewType;
};

export type EntityInput = {
  data?: InputMaybe<Scalars['JSONObject']>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: ReviewType;
};

export enum Extension {
  Jpeg = 'jpeg',
  Jpg = 'jpg',
  Png = 'png'
}

export type Mutation = {
  __typename?: 'Mutation';
  addNewCategory: Category;
  addNewReview: Review;
  addNewSurvey: Survey;
  addSurveyResponse: SurveyResponse;
  deleteSurvey: Survey;
  updateCategory: Category;
  updateSurvey: Survey;
};


export type MutationAddNewCategoryArgs = {
  create: CategoryCreate;
};


export type MutationAddNewReviewArgs = {
  create: ReviewCreate;
};


export type MutationAddNewSurveyArgs = {
  create: SurveyCreate;
};


export type MutationAddSurveyResponseArgs = {
  response: AddResponse;
};


export type MutationDeleteSurveyArgs = {
  id: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['String'];
  update: CategoryUpdate;
};


export type MutationUpdateSurveyArgs = {
  id: Scalars['String'];
  update: SurveyUpdate;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['JSONObject']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  seen: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getAllCategories: Array<Category>;
  getAllReviews: Array<Review>;
  getAllSurvey: Array<Survey>;
  getAllSurveyResponses: Array<SurveyResponse>;
  getCategory: Category;
  getNotifications: Array<Notification>;
  getReview: Review;
  getSignedUrl: Scalars['String'];
  getSurvey: Survey;
};


export type QueryGetCategoryArgs = {
  id: Scalars['String'];
};


export type QueryGetReviewArgs = {
  id: Scalars['String'];
};


export type QueryGetSignedUrlArgs = {
  extension: Extension;
  moduleName?: InputMaybe<Scalars['String']>;
};


export type QueryGetSurveyArgs = {
  id: Scalars['String'];
};

export type Review = {
  __typename?: 'Review';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  entity: Entity;
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type ReviewCreate = {
  description: Scalars['String'];
  entity: EntityInput;
  user: UserInput;
};

export enum ReviewType {
  Blog = 'Blog'
}

export type Survey = {
  __typename?: 'Survey';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  options: Array<Scalars['String']>;
  title: Scalars['String'];
  type: SurveyType;
  updatedAt: Scalars['DateTime'];
};

export type SurveyCreate = {
  options: Array<Scalars['String']>;
  title: Scalars['String'];
  type: SurveyType;
};

export type SurveyResponse = {
  __typename?: 'SurveyResponse';
  answers: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  survey: Survey;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export enum SurveyType {
  MultiChoice = 'MultiChoice',
  Slider = 'Slider'
}

export type SurveyUpdate = {
  options?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SurveyType>;
};

export type User = {
  __typename?: 'User';
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type UserInput = {
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type GetAllSurveyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSurveyQuery = { __typename?: 'Query', getAllSurvey: Array<{ __typename?: 'Survey', options: Array<string>, title: string, type: SurveyType }> };

export type GetReviewsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReviewsQuery = { __typename?: 'Query', getAllReviews: Array<{ __typename?: 'Review', createdAt: any, description: string }> };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategory: { __typename?: 'Category', createdAt: any, description?: string | null | undefined } };

export type GetNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationsQuery = { __typename?: 'Query', getNotifications: Array<{ __typename?: 'Notification', id: string, message: string, title: string }> };

export type SetProfilePictureQueryVariables = Exact<{
  extension: Extension;
  moduleName: Scalars['String'];
}>;


export type SetProfilePictureQuery = { __typename?: 'Query', getSignedUrl: string };


export const GetAllSurveyDocument = `
    query getAllSurvey {
  getAllSurvey {
    options
    title
    type
  }
}
    `;
export const GetReviewsDocument = `
    query getReviews {
  getAllReviews {
    createdAt
    description
  }
}
    `;
export const GetCategoriesDocument = `
    query getCategories {
  getCategory(id: "") {
    createdAt
    description
  }
}
    `;
export const GetNotificationsDocument = `
    query getNotifications {
  getNotifications {
    id
    message
    title
  }
}
    `;
export const SetProfilePictureDocument = `
    query setProfilePicture($extension: Extension!, $moduleName: String!) {
  getSignedUrl(extension: $extension, moduleName: $moduleName)
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllSurvey: build.query<GetAllSurveyQuery, GetAllSurveyQueryVariables | void>({
      query: (variables) => ({ document: GetAllSurveyDocument, variables })
    }),
    getReviews: build.query<GetReviewsQuery, GetReviewsQueryVariables | void>({
      query: (variables) => ({ document: GetReviewsDocument, variables })
    }),
    getCategories: build.query<GetCategoriesQuery, GetCategoriesQueryVariables | void>({
      query: (variables) => ({ document: GetCategoriesDocument, variables })
    }),
    getNotifications: build.query<GetNotificationsQuery, GetNotificationsQueryVariables | void>({
      query: (variables) => ({ document: GetNotificationsDocument, variables })
    }),
    setProfilePicture: build.query<SetProfilePictureQuery, SetProfilePictureQueryVariables>({
      query: (variables) => ({ document: SetProfilePictureDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetAllSurveyQuery, useLazyGetAllSurveyQuery, useGetReviewsQuery, useLazyGetReviewsQuery, useGetCategoriesQuery, useLazyGetCategoriesQuery, useGetNotificationsQuery, useLazyGetNotificationsQuery, useSetProfilePictureQuery, useLazySetProfilePictureQuery } = injectedRtkApi;

