import MaterialReactTable from 'material-react-table';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search';
import {
  getFilterProcess,
  getFilterResult,
  getUserListProcess,
} from '../redux/Home/actions';
import {
  makeSelectFilterList,
  makeSelectUserList,
} from '../redux/Home/selectors';

export const Home = () => {
  const dispatch = useDispatch();

  const [genderSelect, setGenderSelect] = useState('all');
  const [listDataUsers, setListDataUsers] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const dataUsers = useSelector(makeSelectUserList());
  const dataFilters = useSelector(makeSelectFilterList());

  let cloneListDataUsers = JSON.parse(JSON.stringify(listDataUsers));

  useEffect(() => {
    dispatch(getUserListProcess());
    //do something when the row selection changes
  }, []);

  useEffect(() => {
    if (dataFilters.length > 0) {
      setListDataUsers(dataFilters);
    } else {
      setListDataUsers(dataUsers);
    }
  }, [dataFilters, dataUsers, genderSelect]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'username',
        id: 'username',
        header: 'Username',
      },
      {
        accessorKey: 'name',
        id: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'email',
        id: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'gender',
        id: 'gender',
        header: 'Gender',
      },
      {
        accessorKey: 'registrationDate',
        id: 'registrationDate',
        header: 'Registration Date',
      },
    ],
    [],
  );

  //simple data example
  const data = useMemo(() => cloneListDataUsers, [cloneListDataUsers]);

  const getFilteredData = (params) => {
    dispatch(getFilterProcess(params));
  };

  const handleOnResetFilter = () => {
    setGenderSelect('all');
    setSearchKey('');
    dispatch(getFilterResult([]));
  };

  const changeGenderSelected = (e) => {
    setGenderSelect(e.target.value);

    let params = {};

    params.gender = e.target.value;

    if (searchKey) {
      params.keyword = searchKey;
    }

    getFilteredData(params);
  };

  const handleOnChangeSearch = (val) => {
    setSearchKey(val);
  };

  const handleOnSearch = () => {
    let params = {};

    params.keyword = searchKey;

    if (genderSelect !== 'all') {
      params.gender = genderSelect;
    }

    getFilteredData(params);
  };

  return (
    <>
      <Search
        value={searchKey}
        genderSelect={genderSelect}
        handleSelectChange={changeGenderSelected}
        handleResetFilter={handleOnResetFilter}
        onChange={handleOnChangeSearch}
        onRequestSearch={handleOnSearch}
      />
      <MaterialReactTable
        columns={columns}
        data={data}
        options={{
          filtering: true,
        }}
        enableDensityToggle={false}
        enableExpandAll={false}
        enableFullScreenToggle={false}
        enableFilters={false}
        enableHiding={false}
        paginateExpandedRows={false}
        enableToolbarTop={false}
        enableMultiRowSelection={false}
      />
    </>
  );
};
