import React from 'react';
import { paths } from 'appConstants';
import { useApplications } from 'hooks';
import { NavigationButton } from 'modules/shared';
import Application from './Application';

const Applications: React.FC = () => {
  const { applicationsCollection } = useApplications();
  return (
    <div className="p-1">
      <div className="d-flex justify-content-center ">
        <NavigationButton className="btn-create" to={paths.createApplication}>
          Create application
        </NavigationButton>
      </div>
      <div className="applications">
        {applicationsCollection.items.map((application) => (
          <Application
            key={`application-${application.id}`}
            description={application.description}
            name={application.name}
            id={application.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Applications;
