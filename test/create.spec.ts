import { ServiceEnvelopeSchema } from "../generated/meshtastic/mqtt_pb";
import { create, toBinary, fromBinary } from "@bufbuild/protobuf";
import should from 'should';

describe("ServiceEnvelope serialization", () => {
    it("should serialize and deserialize correctly", (done) => {
        console.log("Creating a test envelope");
        const original = create(ServiceEnvelopeSchema, {
            channelId: "test channel",
            gatewayId: "test gateway"
        });

        console.log("Serializing");
        const binary = toBinary(ServiceEnvelopeSchema, original);
        console.log("Deserializing");
        const parsed = fromBinary(ServiceEnvelopeSchema, binary);

        console.log("testing")
        try {
            // should(1).equal(2);

            should(parsed.channelId).equal("test channel");
            should(parsed.gatewayId).equal("test gateway");
            console.log("done")
            done();
        } catch(err) {
            console.error("exception", err);
            done(err);
        }

        console.log("test complete");
    });
});
