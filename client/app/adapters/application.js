import SailsSocketAdapter from 'ember-data-sails/adapters/sails-socket';

export default SailsSocketAdapter.extend({
  namespace: 'api/v0',
  coalesceFindRequests: true,
});
