import { createServerFn } from "@tanstack/react-start";
import { createFileRoute } from "@tanstack/react-router";
import { renderToReadableStream } from "@tanstack/react-start/rsc";
import { ClientComponent } from "#/components/client-component";

async function ServerComponent() {
	await new Promise(resolve => setTimeout(resolve, 5 * 1000));

	return (
		<div>
			<ClientComponent />
			<p>This is a server component</p>
		</div>
	);
}

const getFlightStream = createServerFn({ method: "GET" })
	.handler(() => renderToReadableStream(<ServerComponent />));

export const Route = createFileRoute("/rsc/ServerComponent")({
	server: {
		handlers: {
			GET: async () => {
				const stream = await getFlightStream();

				return new Response(stream, {
					headers: {
						"Content-Type": "text/x-component",
					},
				});
			},
		},
	},
});
