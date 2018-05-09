import { resolve } from 'path';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'malice',
    uiExports: {

      hacks: [
        'plugins/malice/hack'
      ]

    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },


    init(server, options) {
      server.log(['status', 'info', 'malice'], 'Custom branding initialization');
    }


  });
}
