<?php

namespace App\Http\Controllers\Admin;

use Alert;
use App\Http\Requests\ArticleRequest;
use App\Models\Article;
use App\Models\User;
use Backpack\CRUD\app\Http\Controllers\Operations\InlineCreateOperation;
use Backpack\NewsCRUD\app\Models\Category;
use Backpack\NewsCRUD\app\Models\Tag;
use Illuminate\Support\Str;
use Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;
use Backpack\CRUD\app\Http\Controllers\Operations\FetchOperation;

class ArticleCrudController extends \Backpack\NewsCRUD\app\Http\Controllers\Admin\ArticleCrudController
{

    use ListOperation;
    use CreateOperation;
    use UpdateOperation { update as traitStore; }
    use DeleteOperation;
    use ShowOperation;
    use InlineCreateOperation;
    use FetchOperation;

    public function setup()
    {
        $this->crud->setModel(Article::class);
        $this->crud->setRoute(config('backpack.base.route_prefix', 'admin') . '/article');
        $this->crud->setEntityNameStrings('article', 'articles');

        $this->crud->operation('list', function () {
            // filter article
            if (backpack_auth()->user()->hasRole('member')){
                $this->crud->addClause('where','user_id','=',backpack_auth()->user()->id);
            }
            $this->crud->removeButton('clone');

            $this->crud->addColumn([
                'label' => "Image",
                'name' => 'image',
                'type' => 'image',
                'disk'   => 'public',
                'height' => '100px',
                'width'  => '100px',
            ]);


            $this->crud->addColumn('title');
            $this->crud->addColumn([
                'name' => 'approval_status',
                'label' => 'Publish Request',
                'type' => 'closure',
                'function' => function ($entry) {
                    $approval_status = '';
                    if ( $entry->approval_status == Article::APPROVAL_DEFAULT ) {
                         $approval_status = '-';
                    } elseif ( $entry->approval_status == Article::APPROVAL_REQUEST ) {
                         $approval_status = '<span class="badge badge-primary">Waiting</span>';
                    } elseif ( $entry->approval_status == Article::APPROVAL_REJECT ) {
                         $approval_status = '<span class="badge badge-danger">Rejected</span>';
                         if (!empty($entry->approval_reject_reason)) {
                            $approval_status .= '<br/>'.$entry->approval_reject_reason;
                         }
                    } elseif ( $entry->approval_status == Article::APPROVAL_APPROVE ) {
                         $approval_status = '<span class="badge badge-success">Approved</span>';
                    }

                    return $approval_status;
                },

            ]);
            $this->crud->addColumn([
                'name' => 'date',
                'label' => 'Date',
                'type' => 'date',
            ]);
            $this->crud->addColumn([
                'name' => 'featured',
                'label' => 'Featured',
                'type' => 'check',
            ]);
            $this->crud->addColumn([
                'label' => 'Category',
                'type' => 'select',
                'name' => 'category_id',
                'entity' => 'category',
                'attribute' => 'name',
                'wrapper' => [
                    'href' => function ($crud, $column, $entry, $related_key) {
                        return backpack_url('category/' . $related_key . '/show');
                    },
                ],
            ]);
        });
        $this->crud->operation(['create', 'update'], function () {
            $this->crud->setValidation(ArticleRequest::class);

            $this->crud->addField([
                'name' => 'title',
                'label' => 'Title',
                'type' => 'text',
                'placeholder' => 'Your title here',
            ]);


            $this->crud->addField([
                'name' => 'date',
                'label' => 'Date',
                'type' => 'date',
                'default' => date('Y-m-d'),
            ]);
            $this->crud->addField([
                'name' => 'content',
                'label' => 'Content',
                'type' => 'ckeditor',
                'placeholder' => 'Your textarea text here',
            ]);


            $this->crud->addField([
                'label' => "Image",
                'name' => 'image',
                'type' => 'image',
                'disk'   => 'public',
                'height' => '50px',
                'width'  => '50px',
                'crop' => true,

            ]);
            $this->crud->addField([
                'label' => "Image 2",
                'name' => 'image2',
                'type' => 'image',
                'disk'   => 'public',
                'height' => '50px',
                'width'  => '50px',
                'crop' => true,

            ]);
            $this->crud->addField([
                'label' => "Image 3",
                'name' => 'image3',
                'type' => 'image',
                'disk'   => 'public',
                'height' => '50px',
                'width'  => '50px',
                'crop' => true,

            ]);
            $this->crud->addField([
                'label' => "Image 4",
                'name' => 'image4',
                'type' => 'image',
                'disk'   => 'public',
                'height' => '50px',
                'width'  => '50px',
                'crop' => true,

            ]);
            $this->crud->addField([
                'label' => "Image 5",
                'name' => 'image5',
                'type' => 'image',
                'disk'   => 'public',
                'height' => '50px',
                'width'  => '50px',
                'crop' => true,

            ]);


            $this->crud->addField([
                'label' => 'Category',
                'type' => 'relationship',
                'name' => 'category_id',
                'entity' => 'category',
                'attribute' => 'name',
                'inline_create' => true,
                'ajax' => true,
            ]);



            $this->crud->addField([
                'name' => 'status',
                'label' => 'Status',
                'type' => 'select_from_array',
                'options'     => [
                    Article::ARTICLE_PUBLISHED => 'Published',
                    Article::ARTICLE_DRAFT => 'Draft'
                ],
                'allows_null' => false,
                'default'     => Article::ARTICLE_DRAFT,

            ]);

            $this->crud->addField([
                'name' => 'featured',
                'label' => 'Featured item',
                'type' => 'checkbox',
            ]);

            $this->crud->addField([
                'name' => 'captcha',
                'label' => 'Captcha',
                'type' => 'custom_html',
                'value' => '<div>
                                <img src="' . captcha_src('flat') . '" alt="captcha" style="margin-bottom: 10px">
                                <input type="text" name="captcha" class="form-control" placeholder="Enter CAPTCHA">
                            </div>',
                'wrapperAttributes' => ['style' => 'margin-top: 20px;'],
            ]);

        });
        $this->crud->operation('show', function (){
            $this->crud->set('show.setFromDb', true);
            $this->crud->addColumn([
                'name' => 'title',
                'type' => 'text'
            ]);
            $this->crud->addColumn([
                'label' => 'Image',
                'name' => 'image',
                'type' => 'image',
                'disk'   => 'public',
                'height' => '150px',
                'width'  => '150px',
            ]);
            $this->crud->addColumn([
                'name' => 'user_id',
                'type' => 'relationship',
                'label' => 'Author',
                'entity' => 'user', // the method that defines the relationship in your Model
                'attribute' => 'name', // foreign key attribute that is shown to user
                'model' => User::class, // foreign key model
            ]);

            $this->crud->addColumn([
                'name' => 'status',
                'label' => 'Status',
                'type' => 'select_from_array',
                'options'     => [
                    Article::ARTICLE_PUBLISHED => 'Published',
                    Article::ARTICLE_DRAFT => 'Draft'
                ],
                'allows_null' => false,
                'default'     => Article::ARTICLE_DRAFT,
            ]);

            $this->crud->addColumn([
                'type' => 'relationship',
                'name' => 'category_id',
                'label' => 'Category',
            ]);

            $this->crud->addColumn([
                'type' => 'closure',
                'name' => 'approval_status',
                'label' => 'Approval status',
                'function' => function ($entry) {
                    $approval_status = '';
                    if ( $entry->approval_status == Article::APPROVAL_DEFAULT ) {
                         $approval_status = '-';
                    } elseif ( $entry->approval_status == Article::APPROVAL_REQUEST ) {
                         $approval_status = '<span class="badge badge-primary">Waiting</span>';
                    } elseif ( $entry->approval_status == Article::APPROVAL_REJECT ) {
                         $approval_status = '<span class="badge badge-danger">Rejected</span>';
                         if (!empty($entry->approval_reject_reason)) {
                            $approval_status .= '<br/>'.$entry->approval_reject_reason;
                         }
                    } elseif ( $entry->approval_status == Article::APPROVAL_APPROVE ) {
                         $approval_status = '<span class="badge badge-success">Approved</span>';
                    }

                    return $approval_status;
                },
            ]);
        });
    }


    /**
     * Respond to AJAX calls from the select2 with entries from the Category model.
     *
     * @return JSON
     */
    public function fetchCategory()
    {
        return $this->fetch(Category::class);
    }

    /**
     * Respond to AJAX calls from the select2 with entries from the Tag model.
     *
     * @return JSON
     */
    public function fetchTags()
    {
        return $this->fetch(Tag::class);
    }

    public function store()
    {
        $this->crud->hasAccessOrFail('create');

        // execute the FormRequest authorization and validation, if one is required
        $request = $this->crud->validateRequest();

        $data = $this->crud->getStrippedSaveRequest();
        $data['user_id'] = backpack_user()->id;
        $data['slug'] = Str::slug($request->get('title'),'-');

        if ($request->get('status') == Article::ARTICLE_PUBLISHED) {
            if(backpack_auth()->user()->roles->where('name', 'admin')->count()) {
                // immediately approve if admin
                $data['approval_status'] = Article::APPROVAL_APPROVE;
            } else {
                $data['approval_status'] = Article::APPROVAL_REQUEST;
            }
        }

        // insert item in the db
        $item = $this->crud->create($data);
        $this->data['entry'] = $this->crud->entry = $item;

        // show a success message
        Alert::success(trans('backpack::crud.insert_success'))->flash();

        // save the redirect choice for next time
        $this->crud->setSaveAction();

        return $this->crud->performSaveAction($item->getKey());
    }

    public function update()
    {
        $this->crud->hasAccessOrFail('update');

        // execute the FormRequest authorization and validation, if one is required
        $request = $this->crud->validateRequest();

        $data = $this->crud->getStrippedSaveRequest();
        
        if ($request->get('status') == Article::ARTICLE_PUBLISHED) {
            if(backpack_auth()->user()->roles->where('name', 'admin')->count()) {
                // immediately approve if admin
                $data['approval_status'] = Article::APPROVAL_APPROVE;
            } else {
                $data['approval_status'] = Article::APPROVAL_REQUEST;
            }
        }

        // update the row in the db
        $item = $this->crud->update(
            $request->get($this->crud->model->getKeyName()),
            $data,
        );
        $this->data['entry'] = $this->crud->entry = $item;

        // show a success message
        \Alert::success(trans('backpack::crud.update_success'))->flash();

        // save the redirect choice for next time
        $this->crud->setSaveAction();

        return $this->crud->performSaveAction($item->getKey());
        // return $this->traitStore();
    }
}
