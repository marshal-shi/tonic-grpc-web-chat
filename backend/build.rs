fn main() {
    tonic_build::compile_protos("../protos/chat.proto").unwrap();
}
