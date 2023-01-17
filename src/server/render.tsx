import { ReactElement } from "react";
import { renderToString } from "react-dom/server";

export type TemplateRenderProps = {
  title: string;
  description: string;
};

type T = (
  props: TemplateRenderProps & {
    content: string;
  }
) => string;

const renderTemplate: T = (props) => `
    <!DOCTYPE html>
    <html class="scroll-smooth">
        <head>
            <meta charSet="utf-8" />
            <title>${props.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="${props.description}" />
        </head>
        <body>
            <div id="react-root">${props.content}</div>
            <script defer="defer" src="bundle.js"></script>
            <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
        </body>
    </html>
    `;

export const render = (props: TemplateRenderProps, component: ReactElement) =>
  renderTemplate({ ...props, content: renderToString(component) });
