import { rest } from 'msw';

const mockUserApi = {
  logoutUser: rest.post('/logout', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'successfully logout',
      }),
    );
  }),
};

export default mockUserApi;
