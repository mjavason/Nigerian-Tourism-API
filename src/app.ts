import express from 'express';
import { STATUS_CODES, LINKS, LANGUAGE_KEYS } from './constants';
import rootRoutes from './routes';
import preMiddleware from './middleware/pre.middleware';
import { DefaultMsgResponse } from './helpers/response';
import i18nInstance from './helpers/translator';

const app = express();

preMiddleware(app);

//default response
app.get('/', (req, res) => DefaultMsgResponse(res));

//documentation redirect
app.get('/docs', (req, res) => {
  res.redirect(LINKS.API_DOCUMENTATION);
});

// importe all routes
app.use('/api', rootRoutes);

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send({
    status_code: STATUS_CODES.FAILURE,
    message: LANGUAGE_KEYS.ROUTE_NOT_FOUND,
    success: false,
  });
});

export default app;
