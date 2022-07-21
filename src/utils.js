import { format } from 'date-fns';

export const mappingData = (data) => {
  let datas = data ? data : [];

  datas?.forEach((item) => {
    item.username = item.login.username;
    item.name = item.name.first + ' ' + item.name.last;
    item.registrationDate = format(
      new Date(item.registered.date),
      'dd-MM-yyyy hh:mm',
    );
  });

  return datas;
};

export const listGender = ['all', 'male', 'female'];
