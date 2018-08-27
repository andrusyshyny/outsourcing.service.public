import { IJsonResponse, IAppRequest } from '../../middlewares';
import { ILoggerFactory } from '../../common/logger';
import { IDataService } from '../../service/data-services';
import { IUnitOfWork } from '../../service/unit-of-work';
import { ICompanyServices } from '../../models';
import * as validation from '../../service/validation';
import * as TYPES from '../../types';

export function postCompanyServicesRouteHandler(req: IAppRequest, res: IJsonResponse): void {
  let logger = req.kernel.get<ILoggerFactory>(TYPES.LOGGER_FACTORY).getLogger('actions.timer.postCompanyServicesRouteHandler');
  logger.info('Delete /CompanyServices');
  let service = req.kernel.get<IDataService<ICompanyServices>>(Symbol.for('IDataService<ICompanyServices>'));
  let unitOfWork = req.kernel.get<IUnitOfWork>(TYPES.UNIT_OF_WORK);

  let partners: ICompanyServices[] = req.body;

  // if (!validation.isValidInteger(id)) {
  //   res.status(400).send('Invalid timerId parameter');
  //   return;
  // }

  res.jsonPromise(
    unitOfWork.beginAutoCommitTransaction(() => service.updateList(partners))
  );
}
