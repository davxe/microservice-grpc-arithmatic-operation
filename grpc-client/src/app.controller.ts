import { Body, Controller, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc-options';
import { IGrpcService } from './interface/grpc.interface';

@Controller()
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;
  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  async sum(@Body('data') data: number[]) {
    return await this.grpcService.Sum({ data });
  }

  async difference(@Body('data') data: number[]) {
    return await this.grpcService.Difference({ data });
  }

  async multiply(@Body('data') data: number[]) {
    return await this.grpcService.Multiply({ data });
  }

  async divide(@Body('data') data: number[]) {
    return await this.grpcService.divide({ data });
  }
}
