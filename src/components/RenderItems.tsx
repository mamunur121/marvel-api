import React from 'react';

const hash = 'bd0722d5750b6362d5ba0212ca36726b';

export const RenderItems = ({
                              character,
                              types
                            }: {
  character: any;
  types: string;
}) => {
  return (
    <>
      {character[types].items.length > 0 ? (
        character[types].items.map(
          ({ resourceURI, name }: { resourceURI: string; name: string }) => (
            <div className="listItems" key={resourceURI}>
              <h2>Name: {name}</h2>
              <a
                href={`${resourceURI}?ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`}>
                {resourceURI}
              </a>
            </div>
          )
        )
      ) : (
        <h2 style={{ color: 'red' }}>No items are Available</h2>
      )}
    </>
  );
};

export default RenderItems;

