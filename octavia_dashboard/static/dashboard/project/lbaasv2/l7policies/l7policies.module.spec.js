/*
 * Copyright 2018 Walmart.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function() {
  'use strict';

  describe('LBaaS v2 L7Policies Module', function() {
    it('should exist', function() {
      expect(angular.module('horizon.dashboard.project.lbaasv2.l7policies')).toBeDefined();
    });
  });

  describe('LBaaS v2 L7Policies Registry', function () {
    var registry, resourceType;

    beforeEach(module('horizon.dashboard.project.lbaasv2'));

    beforeEach(inject(function($injector) {
      resourceType = $injector.get('horizon.dashboard.project.lbaasv2.l7policies.resourceType');
      registry = $injector.get('horizon.framework.conf.resource-type-registry.service');
    }));

    it('should define resourceType', function () {
      expect(resourceType).toBeDefined();
    });

    it('should register item actions', function () {
      var actions = registry.getResourceType(resourceType).itemActions;
      expect(actionHasId(actions, 'l7policyEdit')).toBe(true);
      expect(actionHasId(actions, 'l7policyDelete')).toBe(true);
    });

    it('should register global actions', function () {
      var actions = registry.getResourceType(resourceType).globalActions;
      expect(actionHasId(actions, 'l7policyCreate')).toBe(true);
    });

    it('should register batch actions', function () {
      var actions = registry.getResourceType(resourceType).batchActions;
      expect(actionHasId(actions, 'l7policyBatchDelete')).toBe(true);
    });

    function actionHasId(list, value) {
      return list.filter(matchesId).length === 1;

      function matchesId(action) {
        return action.id === value;
      }
    }

  });

})();
