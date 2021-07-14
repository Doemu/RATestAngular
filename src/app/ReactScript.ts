import React, {useCallback, useState} from 'react';

export interface HelloFormProps{
  personName: string;
  onChange: (nameUpdate: string) =>  void;
}

const HelloForm: React.FC<HelloFormProps> = ({}) => {
const [currentName, setCurrentName] = useState('');

const onNameChange = useCallback(
  (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentName(event.currentTarget.value);
  },
  []
);

return (
  'Hello ${name}'
);
};

export default HelloForm
//var app = angular.module( 'app', ['react'] );

//app.controller( 'mainCtrl', function( $scope ) {
//  $scope.person = { personName: 'NIkita'};
//} );

//var Hello = React.createClass( {
//  propTypes: {
//    personName: React.PropTypes.string.isRequired
//  },

//  render: function() {
//    return React.DOM.span( null,
//      'Hello ' + this.props.personName + '!'
//    );
//  }
//} );

//app.value( "Hello", Hello );

//app.directive( 'hello', function( reactDirective ) {
//  return reactDirective( Hello );
//} );
