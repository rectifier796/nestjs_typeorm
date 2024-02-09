import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';
import { CreatCommentDto } from './create-comment.dto';

export class UpdateItemDto{
    public:boolean;
    comments: CreatCommentDto[];
}
