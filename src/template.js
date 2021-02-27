function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var templates = {
    /* eslint-disable */
    group: function anonymous(it) {
        var out = '<div id="' + it.group_id + '" class="rules-group-container">   <div class="rules-group-header">     <div class="btn-group pull-right group-actions">       <button type="button" class="btn btn-xs btn-success" data-add="rule">         <i class="' + it.icons.add_rule + '"></i> ' + it.translate("add_rule") + '       </button>       ';

        if (it.settings.allow_groups === -1 || it.settings.allow_groups >= it.level) {
            out += '         <button type="button" class="btn btn-xs btn-success" data-add="group">           <i class="' + it.icons.add_group + '"></i> ' + it.translate("add_group") + '         </button>       ';
        }

        out += '       ';

        if (it.level > 1) {
            out += '         <button type="button" class="btn btn-xs btn-danger" data-delete="group">           <i class="' + it.icons.remove_group + '"></i> ' + it.translate("delete_group") + '         </button>       ';
        }

        out += '     </div>     <div class="btn-group group-conditions">       ';
        var _val1 = it.conditions;

        if (_val1) {
            var _iterator = _createForOfIteratorHelper(_val1),
                _step;

            try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var condition = _step.value;
                    out += '         <label class="btn btn-xs btn-primary">           <input type="radio" name="' + it.group_id + '_cond" value="' + condition + '"> ' + it.translate("conditions", condition) + '         </label>       ';
                }
            } catch (err) {
                _iterator.e(err);
            } finally {
                _iterator.f();
            }
        }

        out += '     </div>     ';

        if (it.settings.display_errors) {
            out += '       <div class="error-container"><i class="' + it.icons.error + '"></i></div>     ';
        }

        out += '   </div>   <div class=rules-group-body>     <div class=rules-list></div>   </div> </div>';
        return out;
    },
    rule: function anonymous(it) {
        var out = '<div id="' + it.rule_id + '" class="rule-container">   <div class="rule-header">     <div class="btn-group pull-right rule-actions">       <button type="button" class="btn btn-xs btn-danger" data-delete="rule">         <i class="' + it.icons.remove_rule + '"></i> ' + it.translate("delete_rule") + '       </button>     </div>   </div>   ';

        if (it.settings.display_errors) {
            out += '     <div class="error-container"><i class="' + it.icons.error + '"></i></div>   ';
        }

        out += '   <div class="rule-filter-container"></div>   <div class="rule-operator-container"></div>   <div class="rule-value-container"></div> </div>';
        return out;
    },
    filterSelect: function anonymous(it) {
        var out = '';
        var optgroup = null;
        out += ' <select class="form-control" name="' + it.rule.id + '_filter">   ';

        if (it.settings.display_empty_filter) {
            out += '     <option value="-1">' + it.settings.select_placeholder + '</option>   ';
        }

        out += '   ';
        var _val1 = it.filters;

        if (_val1) {
            var _iterator2 = _createForOfIteratorHelper(_val1),
                _step2;

            try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var filter = _step2.value;
                    out += '     ';

                    if (optgroup !== filter.optgroup) {
                        out += '       ';

                        if (optgroup !== null) {
                            out += '</optgroup>';
                        }

                        out += '       ';

                        if ((optgroup = filter.optgroup) !== null) {
                            out += '         <optgroup label="' + it.translate(it.settings.optgroups[optgroup]) + '">       ';
                        }

                        out += '     ';
                    }

                    out += '     <option value="' + filter.id + '" ';

                    if (filter.icon) {
                        out += 'data-icon="' + filter.icon + '"';
                    }

                    out += '>' + it.translate(filter.label) + '</option>   ';
                }
            } catch (err) {
                _iterator2.e(err);
            } finally {
                _iterator2.f();
            }
        }

        out += '   ';

        if (optgroup !== null) {
            out += '</optgroup>';
        }

        out += ' </select>';
        return out;
    },
    operatorSelect: function anonymous(it) {
        var out = '';

        if (it.operators.length === 1) {
            out += ' <span> ' + it.translate("operators", it.operators[0].type) + ' </span> ';
        }

        out += ' ';
        var optgroup = null;
        out += ' <select class="form-control ';

        if (it.operators.length === 1) {
            out += 'hide';
        }

        out += '" name="' + it.rule.id + '_operator">   ';
        var _val1 = it.operators;

        if (_val1) {
            var _iterator3 = _createForOfIteratorHelper(_val1),
                _step3;

            try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var operator = _step3.value;
                    out += '     ';

                    if (optgroup !== operator.optgroup) {
                        out += '       ';

                        if (optgroup !== null) {
                            out += '</optgroup>';
                        }

                        out += '       ';

                        if ((optgroup = operator.optgroup) !== null) {
                            out += '         <optgroup label="' + it.translate(it.settings.optgroups[optgroup]) + '">       ';
                        }

                        out += '     ';
                    }

                    out += '     <option value="' + operator.type + '" ';

                    if (operator.icon) {
                        out += 'data-icon="' + operator.icon + '"';
                    }

                    out += '>' + it.translate("operators", operator.type) + '</option>   ';
                }
            } catch (err) {
                _iterator3.e(err);
            } finally {
                _iterator3.f();
            }
        }

        out += '   ';

        if (optgroup !== null) {
            out += '</optgroup>';
        }

        out += ' </select>';
        return out;
    },
    ruleValueSelect: function anonymous(it) {
        var out = '';
        var optgroup = null;
        out += ' <select class="form-control" name="' + it.name + '" ';

        if (it.rule.filter.multiple) {
            out += 'multiple';
        }

        out += '>   ';

        if (it.rule.filter.placeholder) {
            out += '     <option value="' + it.rule.filter.placeholder_value + '" disabled selected>' + it.rule.filter.placeholder + '</option>   ';
        }

        out += '   ';
        var _val1 = it.rule.filter.values;

        if (_val1) {
            var _iterator4 = _createForOfIteratorHelper(_val1),
                _step4;

            try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var entry = _step4.value;
                    out += '     ';

                    if (optgroup !== entry.optgroup) {
                        out += '       ';

                        if (optgroup !== null) {
                            out += '</optgroup>';
                        }

                        out += '       ';

                        if ((optgroup = entry.optgroup) !== null) {
                            out += '         <optgroup label="' + it.translate(it.settings.optgroups[optgroup]) + '">       ';
                        }

                        out += '     ';
                    }

                    out += '     <option value="' + entry.value + '">' + entry.label + '</option>   ';
                }
            } catch (err) {
                _iterator4.e(err);
            } finally {
                _iterator4.f();
            }
        }

        out += '   ';

        if (optgroup !== null) {
            out += '</optgroup>';
        }

        out += ' </select>';
        return out;
    }
    /* eslint-enable */

};

QueryBuilder.templates = templates;

/**
 * Returns group's HTML
 * @param {string} group_id
 * @param {int} level
 * @returns {string}
 * @fires QueryBuilder.changer:getGroupTemplate
 * @private
 */
QueryBuilder.prototype.getGroupTemplate = function(group_id, level) {
    var h = this.templates.group({
        builder: this,
        group_id: group_id,
        level: level,
        conditions: this.settings.conditions,
        icons: this.icons,
        settings: this.settings,
        translate: this.translate.bind(this)
    });

    /**
     * Modifies the raw HTML of a group
     * @event changer:getGroupTemplate
     * @memberof QueryBuilder
     * @param {string} html
     * @param {int} level
     * @returns {string}
     */
    return this.change('getGroupTemplate', h, level);
};

/**
 * Returns rule's HTML
 * @param {string} rule_id
 * @returns {string}
 * @fires QueryBuilder.changer:getRuleTemplate
 * @private
 */
QueryBuilder.prototype.getRuleTemplate = function(rule_id) {
    var h = this.templates.rule({
        builder: this,
        rule_id: rule_id,
        icons: this.icons,
        settings: this.settings,
        translate: this.translate.bind(this)
    });

    /**
     * Modifies the raw HTML of a rule
     * @event changer:getRuleTemplate
     * @memberof QueryBuilder
     * @param {string} html
     * @returns {string}
     */
    return this.change('getRuleTemplate', h);
};

/**
 * Returns rule's filter HTML
 * @param {Rule} rule
 * @param {object[]} filters
 * @returns {string}
 * @fires QueryBuilder.changer:getRuleFilterTemplate
 * @private
 */
QueryBuilder.prototype.getRuleFilterSelect = function(rule, filters) {
    var h = this.templates.filterSelect({
        builder: this,
        rule: rule,
        filters: filters,
        icons: this.icons,
        settings: this.settings,
        translate: this.translate.bind(this)
    });

    /**
     * Modifies the raw HTML of the rule's filter dropdown
     * @event changer:getRuleFilterSelect
     * @memberof QueryBuilder
     * @param {string} html
     * @param {Rule} rule
     * @param {QueryBuilder.Filter[]} filters
     * @returns {string}
     */
    return this.change('getRuleFilterSelect', h, rule, filters);
};

/**
 * Returns rule's operator HTML
 * @param {Rule} rule
 * @param {object[]} operators
 * @returns {string}
 * @fires QueryBuilder.changer:getRuleOperatorTemplate
 * @private
 */
QueryBuilder.prototype.getRuleOperatorSelect = function(rule, operators) {
    var h = this.templates.operatorSelect({
        builder: this,
        rule: rule,
        operators: operators,
        icons: this.icons,
        settings: this.settings,
        translate: this.translate.bind(this)
    });

    /**
     * Modifies the raw HTML of the rule's operator dropdown
     * @event changer:getRuleOperatorSelect
     * @memberof QueryBuilder
     * @param {string} html
     * @param {Rule} rule
     * @param {QueryBuilder.Operator[]} operators
     * @returns {string}
     */
    return this.change('getRuleOperatorSelect', h, rule, operators);
};

/**
 * Returns the rule's value select HTML
 * @param {string} name
 * @param {Rule} rule
 * @returns {string}
 * @fires QueryBuilder.changer:getRuleValueSelect
 * @private
 */
QueryBuilder.prototype.getRuleValueSelect = function(name, rule) {
    var h = this.templates.ruleValueSelect({
        builder: this,
        name: name,
        rule: rule,
        icons: this.icons,
        settings: this.settings,
        translate: this.translate.bind(this)
    });

    /**
     * Modifies the raw HTML of the rule's value dropdown (in case of a "select filter)
     * @event changer:getRuleValueSelect
     * @memberof QueryBuilder
     * @param {string} html
     * @param [string} name
     * @param {Rule} rule
     * @returns {string}
     */
    return this.change('getRuleValueSelect', h, name, rule);
};

/**
 * Returns the rule's value HTML
 * @param {Rule} rule
 * @param {int} value_id
 * @returns {string}
 * @fires QueryBuilder.changer:getRuleInput
 * @private
 */
QueryBuilder.prototype.getRuleInput = function(rule, value_id) {
    var filter = rule.filter;
    var validation = rule.filter.validation || {};
    var name = rule.id + '_value_' + value_id;
    var c = filter.vertical ? ' class=block' : '';
    var h = '';
    var placeholder = Array.isArray(filter.placeholder) ? filter.placeholder[value_id] : filter.placeholder;

    if (typeof filter.input == 'function') {
        h = filter.input.call(this, rule, name);
    }
    else {
        switch (filter.input) {
            case 'radio':
            case 'checkbox':
                Utils.iterateOptions(filter.values, function(key, val) {
                    h += '<label' + c + '><input type="' + filter.input + '" name="' + name + '" value="' + key + '"> ' + val + '</label> ';
                });
                break;

            case 'select':
                h = this.getRuleValueSelect(name, rule);
                break;

            case 'textarea':
                h += '<textarea class="form-control" name="' + name + '"';
                if (filter.size) h += ' cols="' + filter.size + '"';
                if (filter.rows) h += ' rows="' + filter.rows + '"';
                if (validation.min !== undefined) h += ' minlength="' + validation.min + '"';
                if (validation.max !== undefined) h += ' maxlength="' + validation.max + '"';
                if (placeholder) h += ' placeholder="' + placeholder + '"';
                h += '></textarea>';
                break;

            case 'number':
                h += '<input class="form-control" type="number" name="' + name + '"';
                if (validation.step !== undefined) h += ' step="' + validation.step + '"';
                if (validation.min !== undefined) h += ' min="' + validation.min + '"';
                if (validation.max !== undefined) h += ' max="' + validation.max + '"';
                if (placeholder) h += ' placeholder="' + placeholder + '"';
                if (filter.size) h += ' size="' + filter.size + '"';
                h += '>';
                break;

            default:
                h += '<input class="form-control" type="text" name="' + name + '"';
                if (placeholder) h += ' placeholder="' + placeholder + '"';
                if (filter.type === 'string' && validation.min !== undefined) h += ' minlength="' + validation.min + '"';
                if (filter.type === 'string' && validation.max !== undefined) h += ' maxlength="' + validation.max + '"';
                if (filter.size) h += ' size="' + filter.size + '"';
                h += '>';
        }
    }

    /**
     * Modifies the raw HTML of the rule's input
     * @event changer:getRuleInput
     * @memberof QueryBuilder
     * @param {string} html
     * @param {Rule} rule
     * @param {string} name - the name that the input must have
     * @returns {string}
     */
    return this.change('getRuleInput', h, rule, name);
};
