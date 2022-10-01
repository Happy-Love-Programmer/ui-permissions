import { paths } from 'appConstants';
import { Button, Input } from 'modules/shared';
import React, { useCallback, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useRecoilState } from 'recoil';
import { RolesService } from 'services';
import { rolesAtom } from 'store/recoil/atoms';
import { UpdateRoleRequest } from 'types/api';

const CreateRoleForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const roleId = Number.parseInt(id ?? '0');

  const [rolesCollection, setRolesCollection] = useRecoilState(rolesAtom) ?? [];
  const [name, setName] = useState<string>(
    rolesCollection.items.find((t) => t.id == roleId)?.name ?? '',
  );
  const handleOnRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value);
    setName(event?.target.value);
  };
  const handleOnUpdateButton = useCallback(async () => {
    const request: UpdateRoleRequest = {
      name: name,
    };
    await RolesService.update(roleId, request);
    setRolesCollection((rolesCollection) => {
      const { items, count } = rolesCollection;
      const filteredItems = items.filter((t) => t.id !== roleId);
      const role = {
        id: roleId,
        name: name,
      };
      const newCollection = {
        items: [...filteredItems, role],
        count: count,
      };
      return newCollection;
    });
    navigate(paths.roles);
  }, [name, navigate, roleId, setRolesCollection]);

  return (
    <div className="update-role-form">
      <label>
        <b>Enter role name:</b>
      </label>
      <Input
        className="update-role-form__input"
        type={'text'}
        value={name}
        label={'update-role'}
        key={'role-key'}
        onChange={handleOnRoleChange}
      />
      <Button className="update-role-form__submit-button" onClick={handleOnUpdateButton}>
        Update role
      </Button>
    </div>
  );
};

export default CreateRoleForm;