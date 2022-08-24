import { environment } from 'src/environments/environment';

export const ROUTE_CONFIG = {
  baseUrl: environment.baseUrl,
};
export const AUTH_CONFIG = {
  loginUrl: '/api/auth/login',
  userRegistrationUrl: '/api/user/register',
};
export const USER_CONFIG = {
  getUserByTokenUrl: '/api/user/getbytoken',
};
export const TRAINING_CONFIG = {
  getTrainingListUrl: '/api/training/getall',
  getTrainingDetailUrl: '/api/training/get?trainingId=',
};
export const DOMAIN_CONFIG = {
  getDomainListUrl: '/api/domain/getall',
};

export const PAYMENT_CONFIG = {
  createOrderUrl: '/api/payment/createOrder',
  updateOrderUrl: '/api/payment/updateOrder',
};

export const STATE_CONFIG = {
  getStateListUrl:'/api/state/getall?countryId=1'
}

export const BATCH_CONFIG = {
  getBatchListUrl:'/api/batch/getall'
}

export const CONSULT_CONFIG = {
  bookConsultationUrl: '/api/consultation/book'
}