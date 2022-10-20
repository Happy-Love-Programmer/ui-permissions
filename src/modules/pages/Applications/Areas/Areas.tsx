import React from 'react';
import { params, routes } from 'appConstants';
import { useAreas } from 'hooks';
import { ButtonContent, Description, NavigationButton, Title } from 'modules/shared';
import { useParamNumber } from 'hooks';
import { BiLayerPlus } from 'react-icons/bi';
import Area from './Area';

const Areas: React.FC = () => {
  const applicationId = useParamNumber(params.applicationId);
  const { areasCollection } = useAreas(applicationId);

  return (
    <div className="area-page">
      <Title>Application info:</Title>
      <Description>
        Application id: xxx.
        <br />
        Application: xxxxxxxx.
        <br />
        Description: xxxxxxxxxxxxxxxxxxx.
      </Description>
      <Title>Areas:</Title>
      <Description>
        An area is a specific application page or couple of pages.
        <br />
        For each area you can create/update list of permissions for specific roles.
        <br />
        You can create/update an area and add/update permissions to it.
        <br />
        You can see list of existing areas in list below.
      </Description>
      <NavigationButton className="button-primary" to={routes.dashboard.createArea(applicationId)}>
        <ButtonContent>
          Create area <BiLayerPlus className="icon ml-03" />
        </ButtonContent>
      </NavigationButton>
      <hr />
      <table className="areas">
        <thead className="roles-header">
          <tr>
            <th className="text-align-left">Name</th>
            <th className="text-align-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {areasCollection.items.map((area) => (
            <Area key={area.id} id={area.id} applicationId={area.applicationId} name={area.name}></Area>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Areas;
