import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  pathForType: function(modelName) {
   var underscored = Ember.String.underscore(modelName);
   return Ember.String.pluralize(underscored);
 }
});
